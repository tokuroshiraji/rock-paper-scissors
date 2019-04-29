const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const MAX_HANDS_METHODS = 3;
const hands = ['ROCK','PAPER','SCISSORS'];

const WIN = 0;
const LOSE = 1;
const DRAW = 2;
const result = ['WIN', 'LOSE', 'DRAW'];

let enemy_hand = createHand();

let match_count = 0;

console.log('hello');

let player_hand_elements = document.getElementsByClassName('player_hand');

let body_element = document.getElementsByTagName('body');

for ( let i = 0; i < player_hand_elements.length; i++){
    player_hand_elements[i].onclick = function(){
        player_hand = hands.indexOf(player_hand_elements[i].id);
        if(player_hand===-1){
            displayError();
        }else{
            displayMatchResult(player_hand,enemy_hand);
        }
    }
}

// 結果表示
function displayMatchResult( p_hand,e_hand ){
    if(match_count > 0){
        body_element[0].removeChild(body_element[0].lastChild);
        body_element[0].removeChild(body_element[0].lastChild);
        body_element[0].removeChild(body_element[0].lastChild);
        body_element[0].removeChild(body_element[0].lastChild);
    }

    let result_header = document.createElement('h2');
    let result_header_text = document.createTextNode('Match Result');
    result_header.appendChild(result_header_text);

    let result_p1 = document.createElement('p');
    let result_p1_text = 'Your hand is ' + hands[player_hand];
    result_p1.appendChild(document.createTextNode(result_p1_text));

    let result_p2 = document.createElement('p');
    let result_p2_text = 'Enemy hand is ' + hands[enemy_hand];
    result_p2.appendChild(document.createTextNode(result_p2_text));

    let result_p3 = document.createElement('p');
    let result_p3_text = 'Match result : ' + result[judgePlayerWin(player_hand,enemy_hand)];
    result_p3.appendChild(document.createTextNode(result_p3_text));

    body_element[0].appendChild(result_header,body_element);
    body_element[0].appendChild(result_p1,body_element);
    body_element[0].appendChild(result_p2,body_element);
    body_element[0].appendChild(result_p3,body_element);
    match_count++;
}

// 敵の手を作成
function createHand(){
    // 完全ランダム
    return getRandomIntInclusive(0,MAX_HANDS_METHODS-1);
}

// プレイヤーの勝敗を判定
function judgePlayerWin( p_hand,e_hand ){
    if( (p_hand === ROCK && e_hand === SCISSORS) || 
    (p_hand === PAPER && e_hand === ROCK) ||
    (p_hand === SCISSORS && e_hand === PAPER)){
        return WIN;
    }else if( (e_hand === ROCK && p_hand === SCISSORS) || 
    (e_hand === PAPER && p_hand === ROCK) ||
    (e_hand === SCISSORS && p_hand === PAPER)){
        return LOSE;
    }else{
        return DRAW;
    }
}

// 包括的に 2 つの値の間のランダムな整数を得る
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}