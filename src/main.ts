import { Axon } from "@axonlabs/core";
import { HotReload } from "@axonlabs/hot-reload-plugin";

const core = Axon();

// HotReload plugin loads routers from src/routers and listens for changes 
// in the src directory automaticallyand you don't need to add routers manually.
// Note: HotReload plugin is only for development purposes.
core.loadPlugin(new HotReload("./src/routers", "./src"));

core.listen()