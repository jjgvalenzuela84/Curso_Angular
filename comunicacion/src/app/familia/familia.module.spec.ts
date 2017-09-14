import { FamiliaModule } from './familia.module';

describe('FamiliaModule', () => {
  let familiaModule: FamiliaModule;

  beforeEach(() => {
    familiaModule = new FamiliaModule();
  });

  it('should create an instance', () => {
    expect(familiaModule).toBeTruthy();
  });
});
