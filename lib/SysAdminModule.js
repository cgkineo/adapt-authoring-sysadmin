const { AbstractModule } = require('adapt-authoring-core');
/**
* A system administration panel for the Adapt authoring tool UI
* @extends {AbstractModule}
*/
class SysAdminModule extends AbstractModule {
  /** @override */
  async init() {
    const ui = await this.app.waitForModule('ui');
    ui.addUiPlugin(`${this.rootDir}/plugins`);
  }
}

module.exports = SysAdminModule;