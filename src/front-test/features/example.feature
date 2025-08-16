# @MercadoLibreSearch @Smoke
# Feature: MercadoLibre search
#     Scenario: User search and validate results
#         Given User navigates to MercadoLibre page
#         When User search for cars options
#         Then It should show all the results according to the search

@test
Feature: EVAQArmy
    Scenario: Rellenar todos los campos del formulario
        Given el usuario navega en la página de automatización
        When el usuario rellena el formulario
        Then el resultado es el esperado

    Scenario: Selecionar una opcion de radio button
        Given el usuario selecciona los buttons
        When el usuario selecciona los buttons
        Then el resultado es el esperado

    Scenario: Seleciona una opcion de la checkbox
        Given el usuario selecciona el checkbox correcto
        When el usuario selecciona el checkbox correcto
        Then el resultado es el esperado

    Scenario: Seleciona un pais de la lista
        Given el usuario selecciona un pais de la lista
        When el usuario selecciona un pais de la lista
        Then el resultado es el esperado

    Scenario: Seleciona una opcion de los listboxes
        Given el usuario selecciona en los listboxes
        When el usuario selecciona en los listboxes
        Then el resultado es el esperado

    Scenario: Seleciona los date picker
        Given el usuario selecciona los date picker
        When el usuario selecciona los date picker
        Then el resultado es el esperado

    Scenario: Seleciona los date rage picker
        Given el usuario selecciona los date rage picker
        When el usuario selecciona los date rage picker
        Then el resultado es el esperado

    Scenario: Clickea el boton de submit
        Given el usuario selecciona el boton de submit
        When el usuario selecciona el boton de submit
        Then el resultado es el esperado

    Scenario: ascii
        Given el resultado es el esperado
        When endascii
        Then el resultado es el esperado