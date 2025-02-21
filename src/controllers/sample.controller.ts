import type { Controller } from "@axonlabs/core";
import { sampleService } from "../services/sample.service";

const helloWorld: Controller = async (req, res) => {
    const msg = sampleService();

    return res.status(200).body({
        message: msg
    });
}

export default {
    helloWorld
};