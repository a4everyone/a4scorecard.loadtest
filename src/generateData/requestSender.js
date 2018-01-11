const FS = require('fs')
const REQUESTIFY = require('requestify')
const PATH_TO_DATA_FILE = './src/generateData/result.txt'
// const URL_ADDRESS = 'https://local.a4everyone.com/api/app-mgmt/v1.0/runApp/'
// const AUTH_TOKEN = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwYXR1ZiIsImV4cCI6MTU0NTI5MjE4NiwiaWF0IjoxNTEzNzU2MTg2LCJ0eXAiOiJqd3QifQ.LGmROE0uQj85sY4VfAQcl7Ji7mssvX6c9HR59A9Fd34LGP2unIxytnAiSPTQy79qGs2b8UqfLTe2uAUz_eSTq9c7DBwpNjjV2y8GBsVcR-fWxtohh3TbaDcKeVf8E4RcHU6vMdPyhnqtcEVK1-LVBHDZ5vOGBDhf4bYOIl9myuxHzXI7MVKeWf5YQcHdRdb2eK0h8O8TD32iAFoWPADmSpCjTeQQbw4joGUm68888mVtBmMojK0PUGmompuXnusKvxWEaE9s6uNroNFBkLdVR7mxEmfcZB6cuvppQUqyfIpnITQ8TOJCodjOotFdcRQ6KMMHgno30Mcf5qDehn0_sVHBVhwfyrhFHumkEbfdUH8Y1Bh_jgnKLcMF6BdOMY6joNGPdm1zuRIUHJ0T45JZ0FpAZ-jOrk8XI7DRLF40xX9DoVLjw9PMyM70ZfwiwJyJSjmvkPxeDjHc-HWuOpmI5ig5UpeRUUacrLtgp9-s39MGT3pJLP4gmY5mfngQWc_45yu762TqobjksNJSsk7Aorarc6b3golRXtdwHYgaNzn-RLQaP5OrGN9DJDDBJnRtjmHbde-3Rm0BP0vzh1c3U6lqvMAgkafKH7QSQo_DVF7M85rITEJ20pShDq53Uk7bg_wza2yTn43NBDrzu0tJ-kijrnGHZeqAwuTrJuiUyPQ'
const URL_ADDRESS = 'https://stagecred.a4everyone.com/api/app-mgmt/v1.0/runApp/'
const AUTH_TOKEN = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ4b3dhbmUiLCJleHAiOjE1NDQyNjMzMzEsImlhdCI6MTUxMjcyNzMzMSwidHlwIjoiand0In0.oE1-g0h4UBAbth5zJUbCfZ9jNBmeMpcFArjs7s_P7BjSXFhLtERf9rA3YpT5yaLdNfa4TQNS_73p8l-UTVE2fQ6Drq4VMvci8GxfXMwsQ0ZCOZGpQkSjy2HE6VAcA_iFHOuSGX1FTxAdUOE43OxjV1SC_R3Qp9sFTvYwgoSYcpCG9K_TVdwzQdzBzZhKyFwOeX1wuL39pAG5MwtaH0Fz4-3QXIK-teXls-HmO8OZWEr9wGOyAVbsIR4ENn6UYq3tDm14gcyV_Sji4k_pswmQgIRNNUYdubGs4wjWaeF4KVnb7ES3lwEzTU3BkyGFQKk_EyGNxmFXEv5DOvHZmLupC9hnz1CwoQrTzC-976DERbQydkNbllD_MsTt6fmO-kg78QHI9aD_oOKn6-EZjCiJwT3-dOHEZto180XZ8x0lmnk6eclXRZB00taBvFqEcrmpx86LbWVtOcI42RRIBlEAcCXRWwfuGIeeoJlZtSh-yXjOGwq3SfgT6PyEL9400oG3yy1yZrZBLqtqLHUFjzh9vnlsfejvcuqBOe2m5n0YRQm5g-CQipfxgc8zzqqKRP69dLX3ld8g7aSOUqI7rAcUoCBDkCLOqXVPwlk2KEg0lGzA8cv0fNTP41ehQOgVewktxOgSbGKCshc93UL_ud49D7uJyv0L23FLNxsitNOGl1Y'

FS.readFile(PATH_TO_DATA_FILE, 'utf8', (err, data) => {
    if (err) throw err
    let jsonArray = JSON.parse(data)
    
    function createPostMethodsReqursivelly(count, timerid) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
        REQUESTIFY.post(URL_ADDRESS,
                        jsonArray[count]['request'],
                        { headers: {
                            'organization': 'credissimo',
                            'location': 'BG',
                            'application': 'a4scorecard',
                            'Authorization': 'Bearer ' + AUTH_TOKEN
                            }
                        }) 
        .then(function(response) {
            let responseScore = JSON.parse(response.body)[0].scoreSC
            let expectedScore = JSON.parse(jsonArray[count].response)[0].scoreSC
            if (responseScore !== expectedScore) {
                console.log("WARNINIG different scores: expectedScore: " + expectedScore + " responseScore: " + responseScore)
            }
                
            if(count < jsonArray.length - 1) {
                if ((count % 100) == 0) {
                    console.log(timerid + ": " + count + " jsons requested!")
                }
                createPostMethodsReqursivelly(++count, timerid)
            } else {
                console.log(timerid + ": All jsons requested!")
                console.timeEnd(timerid)
            }
        }).fail(function(response) {
            console.log(response)
        })
    }
    
    let counter = 0
    console.log("Starting execution of " + jsonArray.length + " requests. Please wait for response.")
    // console.time('allreqs1')
    // createPostMethodsReqursivelly(counter, 'allreqs1')
    // console.time('allreqs2')
    // createPostMethodsReqursivelly(counter, 'allreqs2')
    // console.time('allreqs3')
    // createPostMethodsReqursivelly(counter, 'allreqs3')

    for (i = 0; i <= 6; i++) {
        for (j = 1; j <= 5; j++) {
            // console.log(`allreqs${i}${j}`)
            let penin = `allreqs${i}${j}`
            setTimeout(function() {console.time(penin); createPostMethodsReqursivelly(counter, penin)}, jsonArray.length * 200 * i)
        }
    }
})
