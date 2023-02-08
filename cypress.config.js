const { defineConfig } = require("cypress")
const fs = require('fs-extra')
const path = require('path')
// ove dve konstante iznad i f-ju ispod smo dodali da bi svicovali config fajlove
function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`)
  //                                          ovo                 i ovo
  //                          je uneseno tako da se samo unosi ime fajla bez ekstenzije
  //                                      a putanja ne ako je u config folderu

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.")
    return{}
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: 'wvqwhh', /* ovo je automatski dodato iz Cypress Cloud settingsa posto smo se logovali na Cypress Cloud */
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // ovo ispod ubaceno zbog svicovanja config fajlova
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    // ovo je dodato
    specPattern: "cypress/e2e/**/*.{js,jsx,ts, tsx,feature}",
    //                        zvezdice znace da je podfolder sa bilo kakvim imenom foldera i (/) fajla
    excludeSpecPattern: "cypress/e2e/other/*.js",
    //                                ne obaziremo se na js fajlove u other folderu
    baseUrl: "http://www.webdriveruniversity.com/",
    chromeWebSecurity: false,
    expermentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true , /* sa ovim ako padne test cuva skrinsot */ /* RADI SAMO NA npx cypress run */
    trashAssetsBeforeRuns: true, /* cisti skrinsot i video folder pre pokretanja testova */
    videoCompression: 12, /* default je 32 a raspon video kompresije 0-51 */
    video: false, /* ovim se onemogucuje snimanje testa */
    videoUploadOnPasses: false, /* da saljemo na cypress cloud i video */
    viewportHeight: 1080, /*  menjamo velicinu test prozora u cypress browseru */
    viewportWidth: 1920,
    // ispod je dodat multi reporter
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json', /* ovaj json smo napravili u rootu porojekta i dodali mu stvari da bi izvozio rezultate testova u xml */
    },
    retries: {
      runMode: 0, /* br ponavljanja palih testova za npx cy RUN */
      openMode: 0 /* br ponavljanja palih testova za npx cy OPEN */
    },
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "http://www.webdriveruniversity.com/"
    }
  }
})
