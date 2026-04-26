import { message } from "prompt"

const PromptSchemaMain = [
    {
        name: "select",
        description: "Escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD",
        pattern: /^[1-2]{1}$/,
        message: "Escolha apenas entre 1 e 2",
        required: true
    },
]

export default PromptSchemaMain