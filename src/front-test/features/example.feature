@Smoke
Feature: Registro en pagina de prueba QArmy
    Scenario: Registro con falta de credenciales
        Given El usuario se encuentra en la pagina de registro
        When El usuario completa el campo Nombre
        Then El resultado es correcto

    Scenario: Rellenar el formulario en el campo apellido
        Given El usuario completa el campo Apellido
        When El usuario completa el campo Apellido
        Then El resultado es correcto

    Scenario: El usuario seleciona su genero
        Given El usuario clickea el checkbox correspondiente a su genero
        When El usuario clickea el checkbox correspondiente a su genero
        Then El resultado es correcto

    Scenario: Rellenar el formulario en el campo email
        Given El usuario completa el campo Email
        When El usuario completa el campo Email
        Then El resultado es correcto

    Scenario: El usuario selecciona un pais
        Given El usuario selecciona su pais de origen
        When El usuario selecciona su pais de origen
        Then El resultado es correcto

    Scenario: El usuario crea su usuario
        Given El usuario completa el campo Usuario
        When El usuario completa el campo Usuario
        Then El resultado es correcto

    Scenario: El usuario completa el input con una contraseña
        Given El usuario completa el campo Contraseña con una contraseña
        When El usuario completa el campo Contraseña con una contraseña
        Then El resultado es correcto

    Scenario: El usuario finaliza el registro
        Given El resultado es correcto
        When El usuario hace clic en el boton registro
        Then El resultado es correcto