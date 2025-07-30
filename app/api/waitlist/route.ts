// keep a zod checkpoint to ensure valid mail ids

import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod'
import { prismaClient } from "@/lib/db";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const mail = body.mail
  // zod checkpoint to ensure its a valid mailid
  const mailSchema = z.string().email();

  const validMail = mailSchema.safeParse(mail);

  if (!validMail) {
    return NextResponse.json({
      message: "please enter a valid mail id"
    }, {
      status: 400
    })
  }

  // also check if mail already exist in db
  const alreadySignedUp = await prismaClient.userWaitlist.findUnique({
    where: { mail }
  })

  if (alreadySignedUp) {
    return NextResponse.json({
      message: "you have already joined the waitlist"
    }, {
      status: 201
    })
  }

  const newUser = await prismaClient.userWaitlist.create({
    data: {
      mail
    }
  })

  if (newUser) {
    return NextResponse.json({
      message: "user data saved in database"
    }, {
      status: 200
    })
  } else {
    return NextResponse.json({
      message: "something unusual happened, please try again later"
    }, {
      status: 500
    })
  }
}