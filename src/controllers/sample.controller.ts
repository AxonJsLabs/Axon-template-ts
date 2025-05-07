import type { Request, Response } from "@axonlabs/core";
import { sampleService } from "../services/sample.service";

const helloWorld = async (req: Request<any>, res: Response) => {
    const msg = sampleService();

    return res.status(200).body({
        message: msg
    });
}

export default {
    helloWorld
};