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
let player_hand = createHand();

document.write('<p>Your hand is ', hands[player_hand], '</p>');
document.write('<p>Enemy hand is ', hands[enemy_hand], '</p>');
document.write('<p>Match result : ', result[judgePlayerWin(player_hand,enemy_hand)], '</p>');

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