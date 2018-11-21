import { AppConfig } from './app.config';

export class MedicineConfig {
  public static httpResource: any = {
    medicine:  AppConfig.SERVER_ADDRESS + 'medicamentos'
  };
}