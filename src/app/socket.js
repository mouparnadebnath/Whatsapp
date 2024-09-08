"use client"
import { io } from "socket.io-client"

export const socket=io()
const msg="Hariom"
socket.emit("hello", msg);