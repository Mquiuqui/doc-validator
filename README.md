
# 📦 Doc Validator

Validator for Brazilian documents like **CPF**, **CNPJ**, **RG**, **CNH**, and **date-related validations** — built by [@mquiuqui](https://github.com/mquiuqui).

![npm](https://img.shields.io/npm/v/@mquiuqui/doc-validator?style=flat-square)
![tests](https://img.shields.io/github/actions/workflow/status/mquiuqui/doc-validator/publish.yml?branch=main&style=flat-square)

## ✨ Features

- ✅ CPF validation and formatting
- ✅ CNPJ validation and formatting
- ✅ RG validation and formatting
- ✅ CNH validation and formatting
- ✅ Brazilian date validation (dd/mm/yyyy)
- ✅ Age calculation & over-18 check
- ✅ Written in TypeScript with full typings
- ✅ Tested with Jest
- ✅ CI/CD with GitHub Actions

---

## 📦 Installation
```bash
npm install @mquiuqui/doc-validator
```

## 🔧 Usage
```ts
import {
  isValidCPF,
  formatCPF,
  isValidCNPJ,
  formatCNPJ,
  isValidRG,
  formatRG,
  isValidCNH,
  formatCNH,
  isValidDateBR,
  isOver18,
  getAge
} from '@mquiuqui/doc-validator';

isValidCPF('529.982.247-25'); // true
formatCPF('52998224725'); // 529.982.247-25

isValidCNPJ('04.252.011/0001-10'); // true
formatCNPJ('04252011000110'); // 04.252.011/0001-10

isValidRG('12.345.678-X'); // true
formatRG('12345678X'); // 12.345.678-X

isValidCNH('12345678909'); // true or false
formatCNH('12345678909'); // 123 456 789 09

isValidDateBR('31/12/2025'); // true
isOver18('01/01/2000'); // true
getAge('01/01/1990'); // 34
```

---

## 🚀 Scripts

| Script                     | Description                                        |
|----------------------------|----------------------------------------------------|
| `npm test`                 | Run unit tests with Jest                          |
| `npm run build`            | Compile TypeScript into `dist/` folder            |
| `npm run release:patch`    | Patch version bump + git push + tag               |

---

## 🛠️ GitHub Actions

This project runs continuous integration via GitHub Actions:
- Automatically runs tests on every push to `main`
- Automatically publishes to NPM when a GitHub release is created

---

## 📄 License
[MIT License](./LICENSE)

---

Made with ❤️ by [@mquiuqui](https://github.com/mquiuqui) — PRs and stars welcome!

