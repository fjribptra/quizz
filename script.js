const fullContainer = document.querySelector('.full-container')

const q1 = document.getElementById('q1')
const clue = document.getElementById('clue')
const sendButton = document.querySelector('.send-answer')
const input = document.querySelector('input')

let init = 0
let score = 0

const QUESTIONS = [
    `Kon..`,
    `Gob..`,
    `Ta..`,
    `Ba..`,
    `Anj..`
]

const CLUE = [
    `Ci/Tra/Sol`,
    `Les/Es/Ber`,
    `S/Ri/U`,
    `U/Tu/Si`,
    `Ar/Ir/Jay`
]

const userAnswerData = []

if ( init == 0 ) {
    q1.innerHTML = QUESTIONS[0]
    clue.innerHTML = CLUE[0]
}

sendButton.addEventListener('click', function() {
    const keyword = input.value.toLowerCase()
    if ( keyword.length < 1 ) return alert('Silahkan isi jawaban terlebih dahulu')
    userAnswerData.push(keyword)
    input.value = ''

    if ( init == 0 ) {
        if ( userAnswerData[0] == 'tol' || userAnswerData[0] == 'kontol') {
            score += 20
        }
    } else if ( init == 1 ) {
        if ( userAnswerData[1] == 'lok' || userAnswerData[1] == 'goblok') {
            score += 20
        }
    } else if ( init == 2 ) {
        if ( userAnswerData[2] == 'i' || userAnswerData[2] == 'tai') {
            score += 20
        }
    } else if ( init == 3 ) {
        if ( userAnswerData[3] == 'bi' || userAnswerData[3] == 'babi') {
            score += 20
        }
    } else if ( init == 4 ) {
        if ( userAnswerData[4] == 'ing' || userAnswerData[4] == 'anjing') {
            score += 20
        }
        fullContainer.style.display = 'none'

        document.body.innerHTML = ` <div class="c">
        <div class="quest">
            <p>Score :</p>
            <h1>${score}</h1>
        </div>
        <div class="answers">
            <button class="back" onclick="location.href = 'index.html'">Back</button>
        </div>
    </div>`
    } 
    
    init++
    q1.innerHTML = QUESTIONS[init]
    clue.innerHTML = CLUE[init]
})
