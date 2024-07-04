import { type Response, Router, type Request } from 'express';

const routes = Router();

routes.get('/ping', (_, res: Response) => res.send('pong'));

routes.get('/test', async (_req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({ msg: 'all ok' });
  } catch (error) {
    res.status(500).json({ msg: 'Error en la consulta a la base de datos', error });
  }
});

export { routes };