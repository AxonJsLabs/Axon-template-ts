import type { Middleware } from "@axonlabs/core";

const helloWorld: Middleware = async (req, res, next) => {
    console.log("middleware: Hello, World!");
    next();
}

export default {
    helloWorld
};