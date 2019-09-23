Ext.namespace('Zarafa.plugins.files.backend.Seafile.ui');

/**
 * @class Zarafa.plugins.files.backend.Seafile.ui.FilesShareUserEditContentPanel
 * @extends Zarafa.core.ui.ContentPanel
 * @xtype filesplugin.seafile.filesshareusereditcontentpanel
 *
 * This content panel contains the sharing edit panel.
 */
Zarafa.plugins.files.backend.Seafile.ui.FilesShareUserEditContentPanel = Ext.extend(Zarafa.core.ui.ContentPanel, {
	/**
	 * The load mask for this content panel
	 * @property
	 * @type Ext.LoadMask
	 */
	loadMask: undefined,

	/**
	 * @constructor
	 * @param config
	 */
	constructor: function (config) {
		Ext.applyIf(config, {
			layout     : 'fit',
			title      : dgettext('plugin_filesbackendSeafile', 'Share Details'),
			closeOnSave: true,
			model      : true,
			autoSave   : false,
			width      : 480,
			height     : 445,
			items:{
				xtype : 'filesplugin.seafile.filesshareusereditpanel',
				record: config.record,
				store : config.store,
				recordId: config.recordId
			}
		});
		Zarafa.plugins.files.backend.Seafile.ui.FilesShareUserEditContentPanel.superclass.constructor.call(this, config);
	}
});

Ext.reg('filesplugin.seafile.filesshareusereditcontentpanel', Zarafa.plugins.files.backend.Seafile.ui.FilesShareUserEditContentPanel);
