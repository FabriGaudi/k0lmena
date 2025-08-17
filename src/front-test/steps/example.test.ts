import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
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

Given("El usuario se encuentra en la pagina de registro", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.goto(BASEURL);
  }
});

When('El usuario completa el campo Nombre', async function () {
  for (const page of pages) {
    await page.getByTestId('input-firstName').click();
    await page.getByTestId('input-firstName').fill('Fabrizio');
    await page.waitForTimeout(500);
  }
});

When('El usuario completa el campo Apellido', async function () {
  for (const page of pages) {
    await page.getByTestId('input-lastName').click();
    await page.getByTestId('input-lastName').fill('Jara');
    await page.waitForTimeout(500);
  }
});

When('El usuario clickea el checkbox correspondiente a su genero', async function () {
  for (const page of pages) {
    await page.getByTestId('radio-masculino').check();
    await page.waitForTimeout(500);
  }
});

When('El usuario completa el campo Email', async function () {
  for (const page of pages) {
    await page.getByTestId('input-email').click();
    await page.getByTestId('input-email').fill('fabri@live.com');
    await page.waitForTimeout(500);
  }
});

When('El usuario selecciona su pais de origen', async function () {
  for (const page of pages) {
    await page.getByTestId('select-country').selectOption('AR');
    await page.waitForTimeout(500);
  }
});

When('El usuario completa el campo Usuario', async function () {
  for (const page of pages) {
    await page.getByTestId('input-username').click();
    await page.getByTestId('input-username').fill('fabrifabri');
    await page.waitForTimeout(500);
  }
});

When('El usuario completa el campo Contraseña con una contraseña', async function () {
  for (const page of pages) {
    await page.getByTestId('input-password').click();
    await page.getByTestId('input-password').fill('Qarmy11?');
    await page.waitForTimeout(500);
  }
});

When('El usuario hace clic en el boton registro', async function () {
  for (const page of pages) {
    await page.getByTestId('button-register').click();
    await page.waitForTimeout(1000);
  }
});

Then('El resultado es correcto', async function () {
  for (const page of pages) {
    expect(validateFirstLocator(page, "div", divResult)).toBeTruthy();
  }
});

