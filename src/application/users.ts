import { Request, Response } from "express";
import getUser from "../domain/users/get-userById";
import { StatusCodes } from "http-status-codes";

//User endpoints logic
export const getUserById = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    if (isNaN(Number(id))) {
      throw new Error("Invalid id format");
    }
    const user = await getUser(id);
    res.send(user);
  } catch (e: any) {
    if (e.message === "Invalid id format") {
      return res.status(StatusCodes.BAD_REQUEST).send({
        error: {
          message: e.message,
          cause: "Bad Request",
          date: new Date().toLocaleString(),
        },
      });
    }
    if (e.message === "User does not exist") {
      return res.status(StatusCodes.NOT_FOUND).send({
        error: {
          message: e.message,
          cause: "Not found",
          date: new Date().toLocaleString(),
        },
      });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      error: {
        message: e.message,
        cause: "Unexpected error",
        date: new Date().toLocaleString(),
      },
    });
  }
};
