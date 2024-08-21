lert('Olá,mundo')
let numero = prompt('Digite um numero:')
alert('O numero informado foi' + numero)
let num1 = prompt('Digite um número:')
let num2 = prompt('Digite outro número:')
let soma = parselnt(num1) + parseInt(num2)
alert('Resultado:' + '\n' + num1 +' ' +' +' +' + num2+ ' + '=' + soma)
let notaPrimeiraBimestre = parselnt(prompt('Digite a sua nota do primeiro bimestre:'))
let notaSegundoBimestre = parselnt(prompt('Digite a sua nota do segundo bimestre:'))
let notaTerceiroBimestre = parselnt(prompt('Digite a sua nota do terceiro bimestre:'))
let notaQuartoBimestre = parselnt(prompt('Digite sua nota do quarto bimestre:'))
let media = notaPrimeiroBimestre
+notaSegundoBimestre
+notaTerceiroBimestre
+notaQuartoBimestre
alert('Sua media total é:' + media/4)
let metros = parselnt(prompt('Digite o valor de metros que quer converter em centimetros:'))
let centimetros = 100
alert('O valor de ${metros} metros em centimetros é: ${centimetros}')
parselnt(prompt('Digite o raio do circulo:'))
let areaDoCirculo = 3.14*('raio*raio')
alert('A área do circulo é:' +area)
let ladoDoQuadrado = parselnt(prompt('Digite o valor do lado do quadrado:'))
let areaDoQuadrado = ladoDoQuadrado * ladoDoQuadrado
alert('O dobro da área do quadrado é:' + areDoQuadrado * 2)
let salarioPorHora = parselnt(prompt('Digite o valor de quanto você recebe por hora'))
let horasTrabalhadas = parselnt(prompt('Digite o número de horas trabalhadas no mês'))
let salarioPorMes = salarioPorHora*horasTrabalhadas
alert('O seu salário no mês é:'+ salarioPorMes)
let temperaturaFarenheit = parselnt(prompt('Digite a temperatura em Farenheit:'))
let temperaturaCelsius = 5*((temperaturaFarenheit-32)/9)
alert('A temperatura em Celsius é' + temperaturaCelsius)
let temperaturaCelsius2=parselnt(prompt('Digite a temperatura em Celsius:'))
let temperaturaFarenheite2=temperaturaCelsius2*1.8+32
alert('A temperatura em Farenheit é' + temperaturaFahrenheit2)
let numerointeiro1= parselnt(prompt('Digite um número inteiro:'))
let numeroReal = parseFloat(prompt('Digite um número real:'))
let calculo1 = (numeroInteiro1*2)*(numeroInteiro2/2)
let calculo2 = (numeroInteiro1*3)+numeroReal
let calculo3 = numeroReal * numeroReal * numeroReal
alert('Resultados: ${calculo1} ${calculo2} ${calculo3}')
let altura = parseFloat(prompt('Digite a sua altura:'))
let pesoIdeal = (72.7*altura)-58 
alert('Seu peso ideal é:' + pesoIdeal)
let altura2 = parseFloat(prompt('Digite a sua altura:'))
let pesoIdealHomem = ((72.7*altura2)-58)
alert('Seu peso ideal é:' + 'pesoIdealHomen' + 'se for homem e' + '\n' + 'pesoIdealMlher' + 'se for mulher')
let pesoDoPeixe = parseFloat(prompt('Digite o peso do peixe:'))
let excesso = pesoDoPeixe - 50
let multa = excesso * 4
alert('O excesso foi de'  + 'kg' + '\n' + 'A multa foi de R$ + multa')
let salarioPorHora2 = parseFloat(prompt('Digite o valor que você recebe por hora:'))
let horasTrabalhadas2 = parseFloat(prompt('Digite o número de horas trabalhadas no mês:'))
let salarioBruto = salarioPorHora2 * horasTrabalhadas2
let inss = salarioBruto*0.08
let sindicato = salarioBruto*0.05
let salarioLiquido = salarioBruto - (inss + sindicado)
alert('Seu salário bruto será: ${salario bruto} O valor pago ao INSS será:${inss} O valor pago ao sindicado será: ${sindiado} O seu salario liquido será:${salarioliquido}')
