const REQUESTIFY = require('requestify')
const FS = require('fs')
const OUTPUT_FILE_PATH = "/home/nikola/a4e/a4scorecard.loadtest/src/generateData/result.txt"
const URL_ADDRESS = 'https://local.a4everyone.com/api/app-mgmt/v1.0/calculateScore/'
const PATH_TO_FILE_READER = '../scoreCardValues/fileReader.js'
const KEY_01 = 'applicantData'
const KEY_02 = 'nssiShort'
const KEY_03 = 'nssiLong'
const KEY_04 = 'ccr'
const CONTRACTS = 'contracts'
const CREDITS = 'credits'
const XMLB64 = 'xmlB64'
const LOAN_CONTRACT_ID = 'LoanContractID'
const PIN = 'PIN' 
const REFERENCE_TYPE = 'ReferenceType'
const BULSTAD = 'Bulstad'
const POS = 'Pos'
const YEAR = 'Year'
const REQUEST_DATE = 'RequestDate'
const CURRENT_DATE = new Date().toJSON().slice(0,10)
const NUMBER_OF_JSON_TO_GENERATE = 1000

console.log('This may take a minute! Please wait for response.')
require(PATH_TO_FILE_READER).import(function (PAYMENT_TYPE) {
    require(PATH_TO_FILE_READER).import(function (LOCATION_CODE) {
        require(PATH_TO_FILE_READER).import(function (LOCATION_CODE_ID) {
            require(PATH_TO_FILE_READER).import(function (ACCESS_CHANNEL) {
                require(PATH_TO_FILE_READER).import(function (CONTRACT_TYPE) {
                    let outputArray = []
                    for (let i = 0; i < NUMBER_OF_JSON_TO_GENERATE; i++) {
                        let obj = {}
                        obj[KEY_01] = {}
                        obj[KEY_01]['ApplicationDate'] = CURRENT_DATE
                        obj[KEY_01][PIN] = '8e49cce250c3d65811cb496de0b9a8369c0cdf24'
                        obj[KEY_01][LOAN_CONTRACT_ID] = '629740'
                        obj[KEY_01]['MaxLoanOverdueL1Y'] = 'N/A'
                        obj[KEY_01]['LoanOverdueCategory'] = 'N/A'
                        obj[KEY_01]['AccountID'] = 1
                        obj[KEY_01]['Gender'] = getRandomInt(3)
                        obj[KEY_01]['IncomeType'] = getRandomInt(11)
                        obj[KEY_01]['LoanAmount'] = getRandomInt(2000)
                        obj[KEY_01]['DaysFromAppToEndDate'] = 591
                        obj[KEY_01]['LoanPeriod'] = getRandomInt(500)
                        obj[KEY_01]['CreditType'] = 1
                        obj[KEY_01]['CreditProduct'] =  getRandomInt(6)
                        obj[KEY_01]['ApplicationStatus'] = 2
                        obj[KEY_01]['CreditStatus'] = 2
                        obj[KEY_01]['PaidAmountPrc'] = 'N/A'
                        obj[KEY_01]['CreditInspectorComment'] = ''
                        obj[KEY_01]['CreditsNumber'] = 0
                        obj[KEY_01]['GracePeriod'] = 'N/A'
                        obj[KEY_01]['DaysArrearsActiveLoans'] = 'N/A'
                        obj[KEY_01]['MaxDaysArrearsActiveLoans'] = 'N/A'
                        obj[KEY_01]['MaxDaysArrearsPaidLoans'] = getRandomInt(320)
                        obj[KEY_01]['PaymentType'] = PAYMENT_TYPE[getRandomInt(PAYMENT_TYPE.length)]
                        obj[KEY_01]['Age'] = getRandomInt(100)
                        obj[KEY_01]['LocationCode'] = LOCATION_CODE[getRandomInt(LOCATION_CODE.length)]
                        obj[KEY_01]['LocationCodeID'] = LOCATION_CODE_ID[getRandomInt(LOCATION_CODE_ID.length)]
                        obj[KEY_01]['AddressMatch'] = 1
                        obj[KEY_01]['ResidentialStatus'] = '99'
                        obj[KEY_01]['PositionName'] = 'N/A'
                        obj[KEY_01]['ContactPerson1'] = 1
                        obj[KEY_01]['ContactPerson2'] = 0
                        obj[KEY_01]['AccessChannel'] = ACCESS_CHANNEL[getRandomInt(ACCESS_CHANNEL.length)]
                        obj[KEY_01]['LoanReason'] = getRandomInt(11)
                        obj[KEY_01]['BankAccount'] = 2
                        obj[KEY_01]['RejectPIN'] = getRandomInt(3)
                        obj[KEY_01]['RejectGSM'] = 1
                        obj[KEY_01]['RejectIP'] = 2
                        obj[KEY_01]['IDCardMatch'] = 'N/A'
                        obj[KEY_01]['HealthInsurance'] = 'N/A'
                        obj[KEY_01]['DER_GoodBad'] = 2
                        obj[KEY_01]['Fraud'] = 2
                        obj[KEY_01]['CourtJudgment'] = 2
                        obj[KEY_01]['Ceded'] = 2
                        obj[KEY_01]['BlackList'] = 2
                        obj[KEY_01]['PaidInterest'] = 0
                        obj[KEY_01]['PaidPrincipal'] = 0
                        obj[KEY_01]['Warranty'] = 0
                        obj[KEY_01]['FeesAndCosts'] = 0
                    
                        obj[KEY_02] = {}
                        obj[KEY_02][XMLB64] = 'PHMgbj0icmVwb3J0NyI+PGMgbj0iRGF0YUZvckVHTkNvbnRyYWN0cyI+PHM+PGEgbj0iQnVsc3RhdCI+MTE1MDA4MDk2PC9hPjxhIG49IkNvbnRyYWN0Q29kZUNvcnJlY3Rpb24iPjA8L2E+PGEgbj0iQ29udHJhY3REb2N1bWVudFR5cGUiPjA8L2E+PGEgbj0iQ29udHJhY3RFeHBpcmF0aW9uRGF0ZSI+PC9hPjxhIG49IkNvbnRyYWN0Rm91bmRhdGlvbkRhdGUiPjAyLzEyLzIwMDI8L2E+PGEgbj0iQ29udHJhY3ROdW1iZXIiPjwvYT48YSBuPSJDb250cmFjdFJlYXNvbiI+MTwvYT48YSBuPSJDb250cmFjdFRlcm1pbmF0aW9uRGF0ZSI+PC9hPjxhIG49IkNvcnJlY3RPckluY29ycmVjdCI+Y29ycmVjdDwvYT48YSBuPSJEYXRlRm9yRUdOUGVyc29uYWxEYXRhIj4wNy8wNS8yMDAzPC9hPjxhIG49IkRhdGVJbnB1dEluTlNTSSI+MjQvMDQvMjAwMzwvYT48YSBuPSJEYXRlSW5wdXRJblJVU08iPjI0LzA0LzIwMDM8L2E+PGEgbj0iRUdOIj54eHh4eHh4eHh4PC9hPjxhIG49IkVHTkJhc2VTYWxhcnkiPjMwPC9hPjxhIG49IkVHTkVjb25vbWljQWN0aXZpdHlfQ29kZSI+Mjg3NTwvYT48YSBuPSJFR05FY29ub21pY0FjdGl2aXR5X0Rlc2NyaXB0aW9uIj4mIzEwNTU7JiMxMDU2OyYjMTA1NDsmIzEwNDg7JiMxMDQ3OyYjMTA0MjsmIzEwNTQ7JiMxMDQ0OyYjMTA1NzsmIzEwNTg7JiMxMDQyOyYjMTA1NDsgJiMxMDUzOyYjMTA0MDsgJiMxMDUyOyYjMTA0NTsmIzEwNTg7JiMxMDQwOyYjMTA1MTsmIzEwNTM7JiMxMDQ4OyAmIzEwNDg7JiMxMDQ3OyYjMTA0NDsmIzEwNDU7JiMxMDUxOyYjMTA0ODsmIzEwNzE7ICYjMTA0MTsmIzEwNDU7JiMxMDQ3OyAmIzEwNTI7JiMxMDQwOyYjMTA2NDsmIzEwNDg7JiMxMDUzOyYjMTA0ODsgJiMxMDQ4OyAmIzEwNTQ7JiMxMDQxOyYjMTA1NDsmIzEwNTY7JiMxMDU5OyYjMTA0NDsmIzEwNDI7JiMxMDQwOyYjMTA1MzsmIzEwNDU7PC9hPjxhIG49IkVHTkZ1bmN0aW9uX0NvZGUiPjQxMzE8L2E+PGEgbj0iRUdORnVuY3Rpb25fRGVzY3JpcHRpb24iPiYjMTA1OTsmIzEwNTU7JiMxMDU2OyYjMTA0MDsmIzEwNDI7JiMxMDQ4OyYjMTA1ODsmIzEwNDU7JiMxMDUxOyAmIzEwNTM7JiMxMDQwOyAmIzEwNTc7JiMxMDUwOyYjMTA1MTsmIzEwNDA7JiMxMDQ0OzwvYT48YSBuPSJFbXBsb3llckFkZHJlc3MiPiYjMTA0MDsmIzEwNTc7JiMxMDQ1OyYjMTA1MzsmIzEwNTQ7JiMxMDQyOyYjMTA0MzsmIzEwNTY7JiMxMDQwOyYjMTA0NDsgJiMxMDU5OyYjMTA1MTsuJiMxMDQxOyYjMTA1NDsmIzEwNDY7JiMxMDQ4OyYjMTA0NDsmIzEwNDA7JiMxMDU2OyAmIzEwNDg7JiMxMDUwOyYjMTA1NDsmIzEwNTM7JiMxMDU0OyYjMTA1MjsmIzEwNTQ7JiMxMDQyOyAxOTwvYT48YSBuPSJFbXBsb3llck5hbWUiPiYjMTA1MDsmIzEwNDA7JiMxMDUyOyYjMTA0NTsmIzEwNTM7JiMxMDQwOyAmIzEwNTI7JiMxMDQwOyYjMTA2NDs8L2E+PGEgbj0iRW1wbG95ZXJQaG9uZSI+MDMzMS82NzI1ODwvYT48YSBuPSJGYW1pbHlOYW1lIj4mIzEwNDA7JiMxMDU4OyYjMTA0MDsmIzEwNTM7JiMxMDQwOyYjMTA1NzsmIzEwNTQ7JiMxMDQyOyYjMTA0MDsgPC9hPjxhIG49IkZpcnN0TmFtZSI+JiMxMDQxOyYjMTA1NDsmIzEwNDY7JiMxMDQwOyYjMTA1MzsmIzEwNDA7IDwvYT48YSBuPSJJbnB1dE51bWJlciI+MTUtNjAxLTAxLTAwMDAzNTI3PC9hPjxhIG49IlN1ck5hbWUiPiYjMTA0NDsmIzEwNDY7JiMxMDQ4OyYjMTA0MzsmIzEwNTQ7JiMxMDUxOyYjMTA0ODsmIzEwNTM7JiMxMDU0OyYjMTA0MjsmIzEwNDA7PC9hPjxhIG49InJ1c28iPjIxPC9hPjwvcz48cz48YSBuPSJCdWxzdGF0Ij4zMDI0NjQ2MzwvYT48YSBuPSJDb250cmFjdENvZGVDb3JyZWN0aW9uIj4wPC9hPjxhIG49IkNvbnRyYWN0RG9jdW1lbnRUeXBlIj4wPC9hPjxhIG49IkNvbnRyYWN0RXhwaXJhdGlvbkRhdGUiPjwvYT48YSBuPSJDb250cmFjdEZvdW5kYXRpb25EYXRlIj4wMi8xMi8yMDAyPC9hPjxhIG49IkNvbnRyYWN0TnVtYmVyIj48L2E+PGEgbj0iQ29udHJhY3RSZWFzb24iPjE8L2E+PGEgbj0iQ29udHJhY3RUZXJtaW5hdGlvbkRhdGUiPjwvYT48YSBuPSJDb3JyZWN0T3JJbmNvcnJlY3QiPmNvcnJlY3Q8L2E+PGEgbj0iRGF0ZUZvckVHTlBlcnNvbmFsRGF0YSI+MDcvMDUvMjAwMzwvYT48YSBuPSJEYXRlSW5wdXRJbk5TU0kiPjI0LzA0LzIwMDM8L2E+PGEgbj0iRGF0ZUlucHV0SW5SVVNPIj4yNC8wNC8yMDAzPC9hPjxhIG49IkVHTiI+eHh4eHh4eHh4eDwvYT48YSBuPSJFR05CYXNlU2FsYXJ5Ij44NTwvYT48YSBuPSJFR05FY29ub21pY0FjdGl2aXR5X0NvZGUiPjI5MjQ8L2E+PGEgbj0iRUdORWNvbm9taWNBY3Rpdml0eV9EZXNjcmlwdGlvbiI+JiMxMDU1OyYjMTA1NjsmIzEwNTQ7JiMxMDQ4OyYjMTA0NzsmIzEwNDI7JiMxMDU0OyYjMTA0NDsmIzEwNTc7JiMxMDU4OyYjMTA0MjsmIzEwNTQ7ICYjMTA1MzsmIzEwNDA7ICYjMTA0NDsmIzEwNTY7JiMxMDU5OyYjMTA0MzsmIzEwNDg7ICYjMTA1MjsmIzEwNDA7JiMxMDY0OyYjMTA0ODsmIzEwNTM7JiMxMDQ4OyAmIzEwNTc7ICYjMTA1NDsmIzEwNDE7JiMxMDY1OyYjMTA1NDsgJiMxMDU1OyYjMTA1NjsmIzEwNDU7JiMxMDQ0OyYjMTA1MzsmIzEwNDA7JiMxMDQ3OyYjMTA1MzsmIzEwNDA7JiMxMDYzOyYjMTA0NTsmIzEwNTM7JiMxMDQ4OyYjMTA0NTs8L2E+PGEgbj0iRUdORnVuY3Rpb25fQ29kZSI+NDEzMTwvYT48YSBuPSJFR05GdW5jdGlvbl9EZXNjcmlwdGlvbiI+JiMxMDU5OyYjMTA1NTsmIzEwNTY7JiMxMDQwOyYjMTA0MjsmIzEwNDg7JiMxMDU4OyYjMTA0NTsmIzEwNTE7ICYjMTA1NzsmIzEwNTA7JiMxMDUxOyYjMTA0MDsmIzEwNDQ7PC9hPjxhIG49IkVtcGxveWVyQWRkcmVzcyI+JiMxMDQzOyYjMTA1NjsuJiMxMDQwOyYjMTA1NzsmIzEwNDU7JiMxMDUzOyYjMTA1NDsmIzEwNDI7JiMxMDQzOyYjMTA1NjsmIzEwNDA7JiMxMDQ0OyAmIzEwNTk7JiMxMDUxOy4gJiMxMDU3OyYjMTA0MDsmIzEwNDI7JiMxMDQwOyAmIzEwNTA7JiMxMDQwOyYjMTA1ODsmIzEwNTY7JiMxMDQwOyYjMTA2MDsmIzEwNDg7JiMxMDUxOyYjMTA1NDsmIzEwNDI7IDE5PC9hPjxhIG49IkVtcGxveWVyTmFtZSI+JiMxMDUwOyYjMTA0MDsmIzEwNTI7JiMxMDQ1OyYjMTA1MzsmIzEwNDA7PC9hPjxhIG49IkVtcGxveWVyUGhvbmUiPjg4ODc2MTM5ODwvYT48YSBuPSJGYW1pbHlOYW1lIj4mIzEwNDA7JiMxMDU4OyYjMTA0MDsmIzEwNTM7JiMxMDQwOyYjMTA1NzsmIzEwNTQ7JiMxMDQyOyYjMTA0MDsgPC9hPjxhIG49IkZpcnN0TmFtZSI+JiMxMDQxOyYjMTA1NDsmIzEwNDY7JiMxMDQwOyYjMTA1MzsmIzEwNDA7IDwvYT48YSBuPSJJbnB1dE51bWJlciI+MTUtNjAxLTAxLTAwMDAzNTI2PC9hPjxhIG49IlN1ck5hbWUiPiYjMTA0NDsmIzEwNDY7JiMxMDQ4OyYjMTA0MzsmIzEwNTQ7JiMxMDUxOyYjMTA0ODsmIzEwNTM7JiMxMDU0OyYjMTA0MjsmIzEwNDA7PC9hPjxhIG49InJ1c28iPjIxPC9hPjwvcz48cz48YSBuPSJCdWxzdGF0Ij4zMDI0NjQ2MzwvYT48YSBuPSJDb250cmFjdENvZGVDb3JyZWN0aW9uIj4wPC9hPjxhIG49IkNvbnRyYWN0RG9jdW1lbnRUeXBlIj4zPC9hPjxhIG49IkNvbnRyYWN0RXhwaXJhdGlvbkRhdGUiPjwvYT48YSBuPSJDb250cmFjdEZvdW5kYXRpb25EYXRlIj4xNy8xMi8yMDAyPC9hPjxhIG49IkNvbnRyYWN0TnVtYmVyIj48L2E+PGEgbj0iQ29udHJhY3RSZWFzb24iPjE8L2E+PGEgbj0iQ29udHJhY3RUZXJtaW5hdGlvbkRhdGUiPjMxLzAxLzIwMDg8L2E+PGEgbj0iQ29ycmVjdE9ySW5jb3JyZWN0Ij5jb3JyZWN0PC9hPjxhIG49IkRhdGVGb3JFR05QZXJzb25hbERhdGEiPjAxLzAyLzIwMDg8L2E+PGEgbj0iRGF0ZUlucHV0SW5OU1NJIj4wMS8wMi8yMDA4PC9hPjxhIG49IkRhdGVJbnB1dEluUlVTTyI+MDEvMDIvMjAwODwvYT48YSBuPSJFR04iPnh4eHh4eHh4eHg8L2E+PGEgbj0iRUdOQmFzZVNhbGFyeSI+MDwvYT48YSBuPSJFR05FY29ub21pY0FjdGl2aXR5X0NvZGUiPjwvYT48YSBuPSJFR05FY29ub21pY0FjdGl2aXR5X0Rlc2NyaXB0aW9uIj48L2E+PGEgbj0iRUdORnVuY3Rpb25fQ29kZSI+PC9hPjxhIG49IkVHTkZ1bmN0aW9uX0Rlc2NyaXB0aW9uIj48L2E+PGEgbj0iRW1wbG95ZXJBZGRyZXNzIj4mIzEwNDM7JiMxMDU2Oy4mIzEwNDA7JiMxMDU3OyYjMTA0NTsmIzEwNTM7JiMxMDU0OyYjMTA0MjsmIzEwNDM7JiMxMDU2OyYjMTA0MDsmIzEwNDQ7ICYjMTA1OTsmIzEwNTE7LiAmIzEwNTc7JiMxMDQwOyYjMTA0MjsmIzEwNDA7ICYjMTA1MDsmIzEwNDA7JiMxMDU4OyYjMTA1NjsmIzEwNDA7JiMxMDYwOyYjMTA0ODsmIzEwNTE7JiMxMDU0OyYjMTA0MjsgMTk8L2E+PGEgbj0iRW1wbG95ZXJOYW1lIj4mIzEwNTA7JiMxMDQwOyYjMTA1MjsmIzEwNDU7JiMxMDUzOyYjMTA0MDs8L2E+PGEgbj0iRW1wbG95ZXJQaG9uZSI+ODg4NzYxMzk4PC9hPjxhIG49IkZhbWlseU5hbWUiPiYjMTA0MDsmIzEwNTg7JiMxMDQwOyYjMTA1MzsmIzEwNDA7JiMxMDU3OyYjMTA1NDsmIzEwNDI7JiMxMDQwOyA8L2E+PGEgbj0iRmlyc3ROYW1lIj4mIzEwNDE7JiMxMDU0OyYjMTA0NjsmIzEwNDA7JiMxMDUzOyYjMTA0MDsgPC9hPjxhIG49IklucHV0TnVtYmVyIj4xLjYzOTAxRSsxMzwvYT48YSBuPSJTdXJOYW1lIj4mIzEwNDQ7JiMxMDQ2OyYjMTA0ODsmIzEwNDM7JiMxMDU0OyYjMTA1MTsmIzEwNDg7JiMxMDUzOyYjMTA1NDsmIzEwNDI7JiMxMDQwOzwvYT48YSBuPSJydXNvIj4yMTwvYT48L3M+PHM+PGEgbj0iQnVsc3RhdCI+MzAyNDY0NjM8L2E+PGEgbj0iQ29udHJhY3RDb2RlQ29ycmVjdGlvbiI+MDwvYT48YSBuPSJDb250cmFjdERvY3VtZW50VHlwZSI+MzwvYT48YSBuPSJDb250cmFjdEV4cGlyYXRpb25EYXRlIj48L2E+PGEgbj0iQ29udHJhY3RGb3VuZGF0aW9uRGF0ZSI+MDIvMTIvMjAwMjwvYT48YSBuPSJDb250cmFjdE51bWJlciI+PC9hPjxhIG49IkNvbnRyYWN0UmVhc29uIj4xPC9hPjxhIG49IkNvbnRyYWN0VGVybWluYXRpb25EYXRlIj4zMS8wMS8yMDA4PC9hPjxhIG49IkNvcnJlY3RPckluY29ycmVjdCI+Y29ycmVjdDwvYT48YSBuPSJEYXRlRm9yRUdOUGVyc29uYWxEYXRhIj4wNS8wMi8yMDA4PC9hPjxhIG49IkRhdGVJbnB1dEluTlNTSSI+MDUvMDIvMjAwODwvYT48YSBuPSJEYXRlSW5wdXRJblJVU08iPjA1LzAyLzIwMDg8L2E+PGEgbj0iRUdOIj54eHh4eHh4eHh4PC9hPjxhIG49IkVHTkJhc2VTYWxhcnkiPjg1PC9hPjxhIG49IkVHTkVjb25vbWljQWN0aXZpdHlfQ29kZSI+MjkyNDwvYT48YSBuPSJFR05FY29ub21pY0FjdGl2aXR5X0Rlc2NyaXB0aW9uIj48L2E+PGEgbj0iRUdORnVuY3Rpb25fQ29kZSI+PC9hPjxhIG49IkVHTkZ1bmN0aW9uX0Rlc2NyaXB0aW9uIj4mIzEwNTk7JiMxMDU1OyYjMTA1NjsmIzEwNDA7JiMxMDQyOyYjMTA0ODsmIzEwNTg7JiMxMDQ1OyYjMTA1MTsgJiMxMDU3OyYjMTA1MDsmIzEwNTE7JiMxMDQwOyYjMTA0NDs8L2E+PGEgbj0iRW1wbG95ZXJBZGRyZXNzIj4mIzEwNDM7JiMxMDU2Oy4mIzEwNDA7JiMxMDU3OyYjMTA0NTsmIzEwNTM7JiMxMDU0OyYjMTA0MjsmIzEwNDM7JiMxMDU2OyYjMTA0MDsmIzEwNDQ7ICYjMTA1OTsmIzEwNTE7LiAmIzEwNTc7JiMxMDQwOyYjMTA0MjsmIzEwNDA7ICYjMTA1MDsmIzEwNDA7JiMxMDU4OyYjMTA1NjsmIzEwNDA7JiMxMDYwOyYjMTA0ODsmIzEwNTE7JiMxMDU0OyYjMTA0MjsgMTk8L2E+PGEgbj0iRW1wbG95ZXJOYW1lIj4mIzEwNTA7JiMxMDQwOyYjMTA1MjsmIzEwNDU7JiMxMDUzOyYjMTA0MDs8L2E+PGEgbj0iRW1wbG95ZXJQaG9uZSI+ODg4NzYxMzk4PC9hPjxhIG49IkZhbWlseU5hbWUiPiYjMTA0MDsmIzEwNTg7JiMxMDQwOyYjMTA1MzsmIzEwNDA7JiMxMDU3OyYjMTA1NDsmIzEwNDI7JiMxMDQwOyA8L2E+PGEgbj0iRmlyc3ROYW1lIj4mIzEwNDE7JiMxMDU0OyYjMTA0NjsmIzEwNDA7JiMxMDUzOyYjMTA0MDsgPC9hPjxhIG49IklucHV0TnVtYmVyIj4xLjYzOTAxRSsxMzwvYT48YSBuPSJTdXJOYW1lIj4mIzEwNDQ7JiMxMDQ2OyYjMTA0ODsmIzEwNDM7JiMxMDU0OyYjMTA1MTsmIzEwNDg7JiMxMDUzOyYjMTA1NDsmIzEwNDI7JiMxMDQwOzwvYT48YSBuPSJydXNvIj4yMTwvYT48L3M+PC9jPjxhIG49InN0YXR1cyI+MTwvYT48L3M+'
                        obj[KEY_02][LOAN_CONTRACT_ID] = '629740'
                        obj[KEY_02][PIN] = '8e49cce250c3d65811cb496de0b9a8369c0cdf24'
                        obj[KEY_02][REQUEST_DATE] = CURRENT_DATE
                        obj[KEY_02][REFERENCE_TYPE] = 1
                        obj[KEY_02][CONTRACTS] = []
                        obj[KEY_02][CONTRACTS][0] = {}
                        obj[KEY_02][CONTRACTS][0][BULSTAD] = 1
                        obj[KEY_02][CONTRACTS][0][POS] = 1
                        obj[KEY_02][CONTRACTS][0][YEAR] = 1
                        obj[KEY_02][CONTRACTS][0]['Month'] = 1
                        obj[KEY_02][CONTRACTS][0]['SocialSecurityType'] = 1
                        obj[KEY_02][CONTRACTS][0]['LengthOfServiceDays'] = 1
                        obj[KEY_02][CONTRACTS][0]['Income'] = 1
                        obj[KEY_02][CONTRACTS][1] = {}
                        obj[KEY_02][CONTRACTS][1][BULSTAD] = 2
                        obj[KEY_02][CONTRACTS][1][POS] = 2
                        obj[KEY_02][CONTRACTS][1][YEAR] = 2
                        obj[KEY_02][CONTRACTS][1]['Month'] = 2
                        obj[KEY_02][CONTRACTS][1]['SocialSecurityType'] = 2
                        obj[KEY_02][CONTRACTS][1]['LengthOfServiceDays'] = 2
                        obj[KEY_02][CONTRACTS][1]['Income'] = 2
                    
                        obj[KEY_03] = {}
                        obj[KEY_03][XMLB64] = 'PHMgbj0icmVwb3J0MiI+PGMgbj0iRWduSW5mbyI+PHM+PGEgbj0iQWRkcmVzcyI+IiYjMTA3NTsmIzEwODg7LiYjMTA0MDsmIzEwNTc7JiMxMDQ1OyYjMTA1MzsmIzEwNTQ7JiMxMDQyOyYjMTA0MzsmIzEwNTY7JiMxMDQwOyYjMTA0NDssICAmIzEwOTE7JiMxMDgzOy4iIiYjMTA1NzsmIzEwNDA7JiMxMDQyOyYjMTA0MDsgJiMxMDUwOyYjMTA0MDsmIzEwNTg7JiMxMDU2OyYjMTA0MDsmIzEwNjA7JiMxMDQ4OyYjMTA1MTsmIzEwNTQ7JiMxMDQyOyIiICAmIzg0NzA7MTksIjwvYT48YSBuPSJDaXR5Ij4mIzEwNDM7JiMxMDU2Oy4mIzEwNDA7JiMxMDU3OyYjMTA0NTsmIzEwNTM7JiMxMDU0OyYjMTA0MjsmIzEwNDM7JiMxMDU2OyYjMTA0MDsmIzEwNDQ7PC9hPjxhIG49IkVHTiI+eHh4eHh4eHh4eDwvYT48YSBuPSJQb3N0YWxDb2RlIj4wPC9hPjxhIG49ImZhbWlseW5hbWUiPiYjMTA0NDsmIzEwNDY7JiMxMDQ4OyYjMTA0MzsmIzEwNTQ7JiMxMDUxOyYjMTA0ODsmIzEwNTM7JiMxMDU0OyYjMTA0MjsmIzEwNDA7PC9hPjxhIG49ImluaXRpYWxzIj4mIzEwNDE7JiMxMDQwOzwvYT48L3M+PC9jPjxjIG49IlJ1c28iPjxzPjxjIG49IkJ1bHN0YXQiPjxzPjxzIG49IkJ1bHN0YXRJbmZvIj48YSBuPSJCdWxzdGF0Ij4xMTUwMDgwOTY8L2E+PGEgbj0iTmFtZSI+JiMxMDUwOyYjMTA0MDsmIzEwNTI7JiMxMDQ1OyYjMTA1MzsmIzEwNDA7ICYjMTA1MjsmIzEwNDA7JiMxMDY0OzwvYT48YSBuPSJhZGRyZXNzIj4iJiMxMDc1OyYjMTA4ODsuJiMxMDQwOyYjMTA1NzsmIzEwNDU7JiMxMDUzOyYjMTA1NDsmIzEwNDI7JiMxMDQzOyYjMTA1NjsmIzEwNDA7JiMxMDQ0OywgICYjMTA5MTsmIzEwODM7LiIiJiMxMDU3OyYjMTA0MDsmIzEwNDI7JiMxMDQwOyAmIzEwNTA7JiMxMDQwOyYjMTA1ODsmIzEwNTY7JiMxMDQwOyYjMTA2MDsmIzEwNDg7JiMxMDUxOyYjMTA1NDsmIzEwNDI7IiIgICYjODQ3MDsxOSwiPC9hPjwvcz48YyBuPSJQZXJzb25hbEluZm8iPjxzPjxhIG49Ik1vbnRoIj4zPC9hPjxhIG49IlNhbGFyeSI+NDkwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MjI8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjIwLzA0LzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj40PC9hPjxhIG49IlNhbGFyeSI+NzcwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MTk8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjE3LzA1LzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj41PC9hPjxhIG49IlNhbGFyeSI+NzcwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MjA8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjIzLzA2LzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj42PC9hPjxhIG49IlNhbGFyeSI+NzcwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MjI8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjI5LzA3LzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj43PC9hPjxhIG49IlNhbGFyeSI+NzcwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MjE8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjEwLzA4LzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj44PC9hPjxhIG49IlNhbGFyeSI+NzcwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MjM8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjI3LzA5LzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj45PC9hPjxhIG49IlNhbGFyeSI+NzcwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MjA8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjIwLzEwLzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj4xMDwvYT48YSBuPSJTYWxhcnkiPjc3MDwvYT48YSBuPSJUeXBlb2Zpc3VyZWQiPjE8L2E+PGEgbj0iV29ya2RheXMiPjIxPC9hPjxhIG49IlllYXIiPjIwMTE8L2E+PGEgbj0iY29ycmVjdGlvbmZsYWciPjA8L2E+PGEgbj0iaW5wdXRkYXRlIj4yMy8xMS8yMDExPC9hPjwvcz48cz48YSBuPSJNb250aCI+MTE8L2E+PGEgbj0iU2FsYXJ5Ij43MDguNTM8L2E+PGEgbj0iVHlwZW9maXN1cmVkIj4xPC9hPjxhIG49IldvcmtkYXlzIj4yMjwvYT48YSBuPSJZZWFyIj4yMDExPC9hPjxhIG49ImNvcnJlY3Rpb25mbGFnIj4wPC9hPjxhIG49ImlucHV0ZGF0ZSI+MTYvMTIvMjAxMTwvYT48L3M+PHM+PGEgbj0iTW9udGgiPjExPC9hPjxhIG49IlNhbGFyeSI+MDwvYT48YSBuPSJUeXBlb2Zpc3VyZWQiPjE8L2E+PGEgbj0iV29ya2RheXMiPjk5PC9hPjxhIG49IlllYXIiPjIwMTE8L2E+PGEgbj0iY29ycmVjdGlvbmZsYWciPjA8L2E+PGEgbj0iaW5wdXRkYXRlIj4wNC8wMS8yMDEyPC9hPjwvcz48cz48YSBuPSJNb250aCI+MTI8L2E+PGEgbj0iU2FsYXJ5Ij43NzUuNTwvYT48YSBuPSJUeXBlb2Zpc3VyZWQiPjE8L2E+PGEgbj0iV29ya2RheXMiPjIxPC9hPjxhIG49IlllYXIiPjIwMTE8L2E+PGEgbj0iY29ycmVjdGlvbmZsYWciPjA8L2E+PGEgbj0iaW5wdXRkYXRlIj4yNS8wMS8yMDEyPC9hPjwvcz48L2M+PC9zPjwvYz48YSBuPSJSdXNvTmJyIj4xNTwvYT48L3M+PC9jPjxhIG49InN0YXR1cyI+MTwvYT48L3M+'
                        obj[KEY_03][LOAN_CONTRACT_ID] = '629740'
                        obj[KEY_03][PIN] = '8e49cce250c3d65811cb496de0b9a8369c0cdf24'
                        obj[KEY_03][REQUEST_DATE] = CURRENT_DATE
                        obj[KEY_03][REFERENCE_TYPE] = ''
                        obj[KEY_03][CONTRACTS] = []
                        obj[KEY_03][CONTRACTS][0] = {}
                        obj[KEY_03][CONTRACTS][0][POS] = 1
                        obj[KEY_03][CONTRACTS][0][BULSTAD] = 1
                        obj[KEY_03][CONTRACTS][0]['CompanyName'] = 1
                        obj[KEY_03][CONTRACTS][0]['ContractType'] = CONTRACT_TYPE[getRandomInt(CONTRACT_TYPE.length)]
                        obj[KEY_03][CONTRACTS][0]['CorrectionCode'] = 1
                        obj[KEY_03][CONTRACTS][0]['DocumentType'] = 1
                        obj[KEY_03][CONTRACTS][0]['ContractStartDate'] = '2017-01-01'
                        obj[KEY_03][CONTRACTS][0]['TermContractEndDate'] = '2018-01-01'
                        obj[KEY_03][CONTRACTS][0]['Income'] = 1
                        obj[KEY_03][CONTRACTS][0]['PositionName'] = 1
                        obj[KEY_03][CONTRACTS][0]['PositionNCOD'] = 1
                        obj[KEY_03][CONTRACTS][0]['PositionNCO'] = 1
                        obj[KEY_03][CONTRACTS][0]['PermContractEndDate'] = '2017-01-01'
                        obj[KEY_03][CONTRACTS][1] = {}
                        obj[KEY_03][CONTRACTS][1][POS] = 2
                        obj[KEY_03][CONTRACTS][1][BULSTAD] = 2
                        obj[KEY_03][CONTRACTS][1]['CompanyName'] = 2
                        obj[KEY_03][CONTRACTS][1]['ContractType'] = 2
                        obj[KEY_03][CONTRACTS][1]['CorrectionCode'] = 2
                        obj[KEY_03][CONTRACTS][1]['DocumentType'] = 2
                        obj[KEY_03][CONTRACTS][1]['ContractStartDate'] = '2017-02-01'
                        obj[KEY_03][CONTRACTS][1]['TermContractEndDate'] = '2018-02-01'
                        obj[KEY_03][CONTRACTS][1]['Income'] = 2
                        obj[KEY_03][CONTRACTS][1]['PositionName'] = 2
                        obj[KEY_03][CONTRACTS][1]['PositionNCOD'] = 2
                        obj[KEY_03][CONTRACTS][1]['PositionNCO'] = 2
                        obj[KEY_03][CONTRACTS][1]['PermContractEndDate'] = '2017-02-01'
                    
                        obj[KEY_04] = {}
                        obj[KEY_04][XMLB64] = 'PHMgbj0icmVwb3J0MiI+PGMgbj0iRWduSW5mbyI+PHM+PGEgbj0iQWRkcmVzcyI+IiYjMTA3NTsmIzEwODg7LiYjMTA0MDsmIzEwNTc7JiMxMDQ1OyYjMTA1MzsmIzEwNTQ7JiMxMDQyOyYjMTA0MzsmIzEwNTY7JiMxMDQwOyYjMTA0NDssICAmIzEwOTE7JiMxMDgzOy4iIiYjMTA1NzsmIzEwNDA7JiMxMDQyOyYjMTA0MDsgJiMxMDUwOyYjMTA0MDsmIzEwNTg7JiMxMDU2OyYjMTA0MDsmIzEwNjA7JiMxMDQ4OyYjMTA1MTsmIzEwNTQ7JiMxMDQyOyIiICAmIzg0NzA7MTksIjwvYT48YSBuPSJDaXR5Ij4mIzEwNDM7JiMxMDU2Oy4mIzEwNDA7JiMxMDU3OyYjMTA0NTsmIzEwNTM7JiMxMDU0OyYjMTA0MjsmIzEwNDM7JiMxMDU2OyYjMTA0MDsmIzEwNDQ7PC9hPjxhIG49IkVHTiI+eHh4eHh4eHh4eDwvYT48YSBuPSJQb3N0YWxDb2RlIj4wPC9hPjxhIG49ImZhbWlseW5hbWUiPiYjMTA0NDsmIzEwNDY7JiMxMDQ4OyYjMTA0MzsmIzEwNTQ7JiMxMDUxOyYjMTA0ODsmIzEwNTM7JiMxMDU0OyYjMTA0MjsmIzEwNDA7PC9hPjxhIG49ImluaXRpYWxzIj4mIzEwNDE7JiMxMDQwOzwvYT48L3M+PC9jPjxjIG49IlJ1c28iPjxzPjxjIG49IkJ1bHN0YXQiPjxzPjxzIG49IkJ1bHN0YXRJbmZvIj48YSBuPSJCdWxzdGF0Ij4xMTUwMDgwOTY8L2E+PGEgbj0iTmFtZSI+JiMxMDUwOyYjMTA0MDsmIzEwNTI7JiMxMDQ1OyYjMTA1MzsmIzEwNDA7ICYjMTA1MjsmIzEwNDA7JiMxMDY0OzwvYT48YSBuPSJhZGRyZXNzIj4iJiMxMDc1OyYjMTA4ODsuJiMxMDQwOyYjMTA1NzsmIzEwNDU7JiMxMDUzOyYjMTA1NDsmIzEwNDI7JiMxMDQzOyYjMTA1NjsmIzEwNDA7JiMxMDQ0OywgICYjMTA5MTsmIzEwODM7LiIiJiMxMDU3OyYjMTA0MDsmIzEwNDI7JiMxMDQwOyAmIzEwNTA7JiMxMDQwOyYjMTA1ODsmIzEwNTY7JiMxMDQwOyYjMTA2MDsmIzEwNDg7JiMxMDUxOyYjMTA1NDsmIzEwNDI7IiIgICYjODQ3MDsxOSwiPC9hPjwvcz48YyBuPSJQZXJzb25hbEluZm8iPjxzPjxhIG49Ik1vbnRoIj4zPC9hPjxhIG49IlNhbGFyeSI+NDkwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MjI8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjIwLzA0LzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj40PC9hPjxhIG49IlNhbGFyeSI+NzcwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MTk8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjE3LzA1LzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj41PC9hPjxhIG49IlNhbGFyeSI+NzcwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MjA8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjIzLzA2LzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj42PC9hPjxhIG49IlNhbGFyeSI+NzcwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MjI8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjI5LzA3LzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj43PC9hPjxhIG49IlNhbGFyeSI+NzcwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MjE8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjEwLzA4LzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj44PC9hPjxhIG49IlNhbGFyeSI+NzcwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MjM8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjI3LzA5LzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj45PC9hPjxhIG49IlNhbGFyeSI+NzcwPC9hPjxhIG49IlR5cGVvZmlzdXJlZCI+MTwvYT48YSBuPSJXb3JrZGF5cyI+MjA8L2E+PGEgbj0iWWVhciI+MjAxMTwvYT48YSBuPSJjb3JyZWN0aW9uZmxhZyI+MDwvYT48YSBuPSJpbnB1dGRhdGUiPjIwLzEwLzIwMTE8L2E+PC9zPjxzPjxhIG49Ik1vbnRoIj4xMDwvYT48YSBuPSJTYWxhcnkiPjc3MDwvYT48YSBuPSJUeXBlb2Zpc3VyZWQiPjE8L2E+PGEgbj0iV29ya2RheXMiPjIxPC9hPjxhIG49IlllYXIiPjIwMTE8L2E+PGEgbj0iY29ycmVjdGlvbmZsYWciPjA8L2E+PGEgbj0iaW5wdXRkYXRlIj4yMy8xMS8yMDExPC9hPjwvcz48cz48YSBuPSJNb250aCI+MTE8L2E+PGEgbj0iU2FsYXJ5Ij43MDguNTM8L2E+PGEgbj0iVHlwZW9maXN1cmVkIj4xPC9hPjxhIG49IldvcmtkYXlzIj4yMjwvYT48YSBuPSJZZWFyIj4yMDExPC9hPjxhIG49ImNvcnJlY3Rpb25mbGFnIj4wPC9hPjxhIG49ImlucHV0ZGF0ZSI+MTYvMTIvMjAxMTwvYT48L3M+PHM+PGEgbj0iTW9udGgiPjExPC9hPjxhIG49IlNhbGFyeSI+MDwvYT48YSBuPSJUeXBlb2Zpc3VyZWQiPjE8L2E+PGEgbj0iV29ya2RheXMiPjk5PC9hPjxhIG49IlllYXIiPjIwMTE8L2E+PGEgbj0iY29ycmVjdGlvbmZsYWciPjA8L2E+PGEgbj0iaW5wdXRkYXRlIj4wNC8wMS8yMDEyPC9hPjwvcz48cz48YSBuPSJNb250aCI+MTI8L2E+PGEgbj0iU2FsYXJ5Ij43NzUuNTwvYT48YSBuPSJUeXBlb2Zpc3VyZWQiPjE8L2E+PGEgbj0iV29ya2RheXMiPjIxPC9hPjxhIG49IlllYXIiPjIwMTE8L2E+PGEgbj0iY29ycmVjdGlvbmZsYWciPjA8L2E+PGEgbj0iaW5wdXRkYXRlIj4yNS8wMS8yMDEyPC9hPjwvcz48L2M+PC9zPjwvYz48YSBuPSJSdXNvTmJyIj4xNTwvYT48L3M+PC9jPjxhIG49InN0YXR1cyI+MTwvYT48L3M+'
                        obj[KEY_04][LOAN_CONTRACT_ID] = '629740'
                        obj[KEY_04][REQUEST_DATE] = CURRENT_DATE
                        obj[KEY_04][PIN] = '8e49cce250c3d65811cb496de0b9a8369c0cdf24' 
                        obj[KEY_04][REFERENCE_TYPE] = 1
                        obj[KEY_04]['LoansAndInstitutions'] = ''
                        obj[KEY_04]['TotalUtilizedAmount'] = getRandomInt(60000)
                        obj[KEY_04]['TotalPrincipalOverdue'] = 0
                        obj[KEY_04][CREDITS] = [] 
                        obj[KEY_04][CREDITS][0] = {}
                        obj[KEY_04][CREDITS][0]['Loan'] = 1 
                        obj[KEY_04][CREDITS][0]['PrincipalOverdue'] = 1
                        obj[KEY_04][CREDITS][0]['Principal'] = 1 
                        obj[KEY_04][CREDITS][0]['UtilizedAmount'] = 1
                        obj[KEY_04][CREDITS][0]['LastStatementDate'] = '2017-01-01'
                        obj[KEY_04][CREDITS][0]['LoanOverdueCategory'] = 1
                        obj[KEY_04][CREDITS][1] = {} 
                        obj[KEY_04][CREDITS][1]['Loan'] = 2 
                        obj[KEY_04][CREDITS][1]['PrincipalOverdue'] = 2
                        obj[KEY_04][CREDITS][1]['Principal'] = 2 
                        obj[KEY_04][CREDITS][1]['UtilizedAmount'] = 2
                        obj[KEY_04][CREDITS][1]['LastStatementDate'] = '2017-02-01'
                        obj[KEY_04][CREDITS][1]['LoanOverdueCategory'] = 2
                    
                        outputArray[i] = {}
                        outputArray[i]['request'] = obj
                    }
                    
                    function getRandomInt(max) { // returns random number between 1(included) and max(excluded)
                        return Math.floor(Math.random() * (max-1)+1) 
                    }
                    
                    function createPostMethodsReqursivelly(count) {
                        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
                        REQUESTIFY.post(URL_ADDRESS, outputArray[count]['request'])
                        .then(function(response) {
                            outputArray[count]['response'] = response.getBody()
                            if (count == NUMBER_OF_JSON_TO_GENERATE - 1) {
                                FS.writeFile(OUTPUT_FILE_PATH, JSON.stringify(outputArray), function(err) {
                                    if(err) {
                                        console.log(err)
                                    }
                                    console.log('Result writed in ' + OUTPUT_FILE_PATH)
                                })
                            } else {
                                createPostMethodsReqursivelly(++count)
                            }
                        }).fail(function(response) {
                            console.log(response)
                        })
                    }
                    
                    let counter = 0
                    createPostMethodsReqursivelly(counter)
                }, '2.01, LNSSI_ContractType_1, nominal,')
            }, '1.26, APP_AccessChannel, nominal,')
        }, '1.2, APP_LocationCodeID, nominal,')
    }, '1.19, APP_LocationCode, nominal,')
}, '1.17, APP_PaymentType, nominal,')

