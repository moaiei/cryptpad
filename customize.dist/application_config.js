// SPDX-FileCopyrightText: 2023 XWiki CryptPad Team <contact@cryptpad.org> and contributors
//
// SPDX-License-Identifier: AGPL-3.0-or-later

/*
 * You can override the configurable values from this file.
 * The recommended method is to make a copy of this file (/customize.dist/application_config.js)
   in a 'customize' directory (/customize/application_config.js).
 * If you want to check all the configurable values, you can open the internal configuration file
   but you should not change it directly (/common/application_config_internal.js)
*/

define([
  '/common/application_config_internal.js',
  '/api/config'
  ], function (AppConfig, ApiConfig ) {
//  const Path = require("path");

    // Example: If you want to remove the survey link in the menu:
    // AppConfig.surveyURL = "";

    // To inform users of the support ticket panel which languages your admins speak:
    //AppConfig.supportLanguages = [ 'en', 'fr' ];
    AppConfig.availablePadTypes = ['drive', 'teams', 'file', 'contacts', 'convert'].concat(ApiConfig.availableApps)
    
    return AppConfig;
});
