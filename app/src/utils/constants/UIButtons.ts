export const UIButtons: Record<string, App.Props.GamepadButtons['buttons']> = {
  GameListBar: [
    { label: 'Start', button: 'ButtonA' },
    { label: 'Add Game', button: 'ButtonY' },
  ],
  GameListGrid: [
    { label: 'Editar', button: 'ButtonA' },
    { label: 'Voltar', button: 'ButtonB' },
    { label: 'Salvar', button: 'ButtonX' },
  ],
};

/*
  GameListBar: [
    { content: 'A', label: 'Start' },
    { content: 'X', label: 'Grid View' },
    { content: 'Y', label: 'Add Game' },
  ],
  GameListGrid: [
    { content: 'A', label: 'Start' },
    { content: 'X', label: 'List View' },
    { content: 'Y', label: 'Add Game' },
  ],
  GameDetailsForm: [
    { content: 'A', label: 'Edit' },
    { content: 'X', label: 'Save' },
    { content: 'Y', label: 'Game List' },
  ],
*/
