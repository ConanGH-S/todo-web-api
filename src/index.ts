import { App } from "./app.js";

class Bootstrap {
  public static init () {
    const app = new App().init();

    const PORT = process.env.PORT ?? 3001;

    app.listen(PORT, (): void => {
      console.log(`Server working on port ${PORT}`);
    });
  }
}

Bootstrap.init();