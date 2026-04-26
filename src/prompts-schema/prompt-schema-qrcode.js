import chalk from "chalk"
import createQRCode from "../services/qr-code/create.js"

const PromptSchemaQRCode = [
    {
        name: "link",
        desccription: chalk.yellow("Digite o link para gerar o QR Code"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha emtre o tipo (1 - NORMAL ou (2 - TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Por favor, escolha uma das opções: 1 ou 2"),
        required: true,
    },
    
]

export default PromptSchemaQRCode