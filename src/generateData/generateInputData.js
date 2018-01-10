const REQUESTIFY = require('requestify')
const FS = require('fs')
const OUTPUT_FILE_PATH = "/home/nikola/a4e/a4e.credissimo.tests/src/generateData/result.txt"
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
const NUMBER_OF_JSON_TO_GENERATE = 1000

console.log('This may take a minute! Please wait for response.')
require(PATH_TO_FILE_READER).import(function (PAYMENT_TYPE) {
    require(PATH_TO_FILE_READER).import(function (LOCATION_CODE) {
        require(PATH_TO_FILE_READER).import(function (LOCATION_CODE_ID) {
            require(PATH_TO_FILE_READER).import(function (RESIDENTAL_STATUS) {
                require(PATH_TO_FILE_READER).import(function (ACCESS_CHANNEL) {
                    require(PATH_TO_FILE_READER).import(function (CONTRACT_TYPE) {
                        let outputArray = []
                        for (let i = 0; i < NUMBER_OF_JSON_TO_GENERATE; i++) {
                            let obj = {}
                            obj[KEY_01] = {}
                            obj[KEY_01]['ApplicationDate'] = new Date().toJSON().slice(0,10)
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
                            obj[KEY_01]['ResidentialStatus'] = RESIDENTAL_STATUS[getRandomInt(RESIDENTAL_STATUS.length)]
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
                            obj[KEY_02][XMLB64] = 'PHMgbj0icmVwb3J0NyI+PGMgbj0iRGF0YUZvckVHTkNvbnRyYWN0cyI+'
                            obj[KEY_02][LOAN_CONTRACT_ID] = '629740'
                            obj[KEY_02][PIN] = '8e49cce250c3d65811cb496de0b9a8369c0cdf24'
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
                            obj[KEY_03][XMLB64] = 'PHMgbj0icmVwb3J0MiI+PGMgbj0iRWduSW5mbyI+PHM+PGEgbj0iQWRkcmVzcyI'
                            obj[KEY_03][LOAN_CONTRACT_ID] = '629740'
                            obj[KEY_03][PIN] = '8e49cce250c3d65811cb496de0b9a8369c0cdf24'
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
                            obj[KEY_04][XMLB64] = 'PHMgbj0icmVwb3J0MiI+PGMgbj0iRWduSW5mbyI+PHM+PGEgbj0iQWRkcmVzcyI+'
                            obj[KEY_04][LOAN_CONTRACT_ID] = '629740'
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

                    }, '3.08,LNSSI_ContractType_1,nominal,')
                }, '1.26,APP_AccessChannel,nominal,')
            }, '1.22,APP_ResidentialStatus,nominal,')
        }, '1.20,APP_LocationCodeID,nominal,')
    }, '1.19,APP_LocationCode,nominal,')
}, '1.17,APP_PaymentType,nominal,')

