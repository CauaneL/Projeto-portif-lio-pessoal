const ExcelJS = require('exceljs');
const fs = require('fs');

exports.processExcel = async (filePath) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const sheet = workbook.getWorksheet(1);

  const clientes = [];
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return; // Ignora cabeçalho
    clientes.push({
      id: row.getCell(1).value,
      nome: row.getCell(2).value,
      status: row.getCell(3).value
    });
  });

  // Exemplo de processamento: imprimir ou atualizar no CRM
  console.log('Clientes carregados:', clientes);

  // Opcionalmente deletar o arquivo depois de processar
  fs.unlinkSync(filePath);

  return clientes;
};
