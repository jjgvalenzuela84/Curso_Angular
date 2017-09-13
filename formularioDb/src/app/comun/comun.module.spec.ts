import { ComunModule } from './comun.module';

describe('ComunModule', () => {
  let comunModule: ComunModule;

  beforeEach(() => {
    comunModule = new ComunModule();
  });

  it('should create an instance', () => {
    expect(comunModule).toBeTruthy();
  });
});
