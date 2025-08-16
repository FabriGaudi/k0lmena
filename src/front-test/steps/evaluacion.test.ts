import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import { Page } from 'playwright';
import {
  inputLabel,
  buttonSearch,
  divResult
} from '../locators/exampleLocators';
import {
  getByPlaceholderAndClickIt,
  getByPlaceholderAndFillIt,
  getElementByRole
} from '../utils/interactions';
// import { withPerformanceTracking } from '@artilleryio/playwright-reporter';

Given("el usuario navega en la página de automatización", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.goto(BASEURL);
  }
});

When("el usuario rellena el formulario", async () => {
  for (const page of pages) {
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Alan');
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('alancavs@underc0de.org');
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('2616668888');
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).fill('Mendoza Capital 1001');
  await page.waitForTimeout(500);
  }
});

When("el usuario selecciona los buttons", async () => {
  for (const page of pages) {
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.waitForTimeout(500);
  }
});

When("el usuario selecciona el checkbox correcto", async () => {
  for (const page of pages) {
    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    await page.getByRole('checkbox', { name: 'Friday' }).check();
    await page.getByRole('checkbox', { name: 'Monday' }).check();
    await page.getByRole('checkbox', { name: 'Saturday' }).check();
    await page.waitForTimeout(500);
  }
});

When("el usuario selecciona un pais de la lista", async () => {
  for (const page of pages) {
    await page.getByLabel('Country:').selectOption('japan');
    await page.waitForTimeout(500);
  }
});

When("el usuario selecciona en los listboxes", async () => {
  for (const page of pages) {
    await page.getByLabel('Country:').selectOption('japan');
    await page.getByLabel('Colors:').selectOption('white');
    await page.getByLabel('Sorted List:').selectOption('dog');
    await page.waitForTimeout(500);
  }
});

When("el usuario selecciona los date picker", async () => {
  for (const page of pages) {
    await page.locator('#datepicker').click();
    await page.getByTitle('Prev').click();
    await page.locator('#ui-datepicker-div').getByRole('link', { name: '1', exact: true }).click();
    await page.waitForTimeout(2000);
    await page.locator('#txtDate').click();
    await page.locator('#ui-datepicker-div').getByRole('link', { name: '1', exact: true }).click();
    await page.waitForTimeout(2000);
  }
});

When("el usuario selecciona los date rage picker", async () => {
  for (const page of pages) {
    await page.getByPlaceholder('Start Date').fill('2020-01-01');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('End Date').fill('2025-08-01');
    await page.waitForTimeout(1000);
  }
});

When("el usuario selecciona el boton de submit", async () => {
  for (const page of pages) {
    await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(3000);
  }
});

Then('el resultado es el esperado', async function () {
  for (const page of pages) {
    expect(validateFirstLocator(page, "div", divResult)).toBeTruthy();
  }

});

Then("endascii", async function () {
  for (const page of pages) {
    console.log(" ");
    console.log(" ");
    console.log("  ░██████      ░███    ░█████████  ░███     ░███ ░██     ░██ ");
    console.log(" ░██   ░██    ░██░██   ░██     ░██ ░████   ░████  ░██   ░██  ");
    console.log("░██     ░██  ░██  ░██  ░██     ░██ ░██░██ ░██░██   ░██ ░██   ");
    console.log("░██     ░██ ░█████████ ░█████████  ░██ ░████ ░██    ░████    ");
    console.log("░██     ░██ ░██    ░██ ░██   ░██   ░██  ░██  ░██     ░██     ");
    console.log(" ░██   ░██  ░██    ░██ ░██    ░██  ░██       ░██     ░██     ");
    console.log("  ░██████   ░██    ░██ ░██     ░██ ░██       ░██     ░██     ");
    console.log("       ░██                                                   ");
    console.log("        ░██                                                  ");
    console.log("=============================================================");
    console.log("                      Fin de la prueba                       ");
    console.log("                     Hecho por Alan Cavs                     ");
    console.log("=============================================================");
    console.log(" ");
  }
});
