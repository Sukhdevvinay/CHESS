//  x-11  x-10   x-9
//  x-1    x     x+1
//  x+9   x+10   x+11
let king_pos = [];
let check_state = -1;
let start_pos;
let z = 0;
var prevDotPosition = [];
let current_position = {
    1.1: "0",
    1.2: "7",
    2.1: "1",
    2.2: "6",
    3.1: "2",
    3.2: "5",
    4: "3",
    5: "4",
    6.1: "10",
    6.2: "11",
    6.3: "12",
    6.4: "13",
    6.5: "14",
    6.6: "15",
    6.7: "16",
    6.8: "17",
    7.1: "60",
    7.2: "61",
    7.3: "62",
    7.4: "63",
    7.5: "64",
    7.6: "65",
    7.7: "66",
    7.8: "67",
    8.1: "70",
    8.2: "77",
    9.1: "71",
    9.2: "76",
    10.1: "72",
    10.2: "75",
    11: "73",
    12: "74"
}
function check_queen(x, y) {
    let black_queen_pos= [];
    let white_queen_pos= [];
    // Vertical down
    if(y == 4) {
        let a = parseInt(x[y]) + 10;
        while (((a >= 0 && a <= 7) || (a >= 10 && a <= 17) || (a >= 20 && a <= 27) || (a >= 30 && a <= 37) || (a >= 40 && a <= 47) || (a >= 50 && a <= 57) || (a >= 60 && a <= 67) || (a >= 70 && a <= 77)) && (document.getElementById(a.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(a.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            black_queen_pos.push(a);
            a = a + 10; // a = 60
        }
        // Vertical up
        let up = parseInt(x[y]) - 10;
        while (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) &&  (document.getElementById(up.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(up.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            black_queen_pos.push(up);
            up = up - 10; // a = 60
        }
        // horizonatl right 
        let k = parseInt(x[y]) + 1;
        while (((k >= 0 && k <= 7) || (k >= 10 && k <= 17) || (k >= 20 && k <= 27) || (k >= 30 && k <= 37) || (k >= 40 && k <= 47) || (k >= 50 && k <= 57) || (k >= 60 && k <= 67) || (k >= 70 && k <= 77)) &&  (document.getElementById(k.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(k.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            black_queen_pos.push(k);
            k = k + 1;
        }
        // horizonatl left
        let b = parseInt(x[y]) - 1;
        while (((b >= 0 && b <= 7) || (b >= 10 && b <= 17) || (b >= 20 && b <= 27) || (b >= 30 && b <= 37) || (b >= 40 && b <= 47) || (b >= 50 && b <= 57) || (b >= 60 && b <= 67) || (b >= 70 && b <= 77)) &&  (document.getElementById(b.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(b.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            black_queen_pos.push(b);
            b = b - 1;
        }
        // Right branch up  
        let Right_branch_up = parseInt(x[y]) - 9;
        while (((Right_branch_up >= 0 && Right_branch_up <= 7) || (Right_branch_up >= 10 && Right_branch_up <= 17) || (Right_branch_up >= 20 && Right_branch_up <= 27) || (Right_branch_up >= 30 && Right_branch_up <= 37) || (Right_branch_up >= 40 && Right_branch_up <= 47) || (Right_branch_up >= 50 && Right_branch_up <= 57) || (Right_branch_up >= 60 && Right_branch_up <= 67) || (Right_branch_up >= 70 && Right_branch_up <= 77)) &&  (document.getElementById(Right_branch_up.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(Right_branch_up.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            black_queen_pos.push(Right_branch_up);
            Right_branch_up = Right_branch_up - 9;
        }
        // Right branch down  
        let Right_branch_down = parseInt(x[y]) + 11;
        while (((Right_branch_down >= 0 && Right_branch_down <= 7) || (Right_branch_down >= 10 && Right_branch_down <= 17) || (Right_branch_down >= 20 && Right_branch_down <= 27) || (Right_branch_down >= 30 && Right_branch_down <= 37) || (Right_branch_down >= 40 && Right_branch_down <= 47) || (Right_branch_down >= 50 && Right_branch_down <= 57) || (Right_branch_down >= 60 && Right_branch_down <= 67) || (Right_branch_down >= 70 && Right_branch_down <= 77)) &&  (document.getElementById(Right_branch_down.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(Right_branch_down.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            black_queen_pos.push(Right_branch_down);
            Right_branch_down = Right_branch_down + 11;
        }
        // left branch up   
        let Left_branch_up = parseInt(x[y]) - 11;
        while (((Left_branch_up >= 0 && Left_branch_up <= 7) || (Left_branch_up >= 10 && Left_branch_up <= 17) || (Left_branch_up >= 20 && Left_branch_up <= 27) || (Left_branch_up >= 30 && Left_branch_up <= 37) || (Left_branch_up >= 40 && Left_branch_up <= 47) || (Left_branch_up >= 50 && Left_branch_up <= 57) || (Left_branch_up >= 60 && Left_branch_up <= 67) || (Left_branch_up >= 70 && Left_branch_up <= 77)) &&  (document.getElementById(Left_branch_up.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(Left_branch_up.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            black_queen_pos.push(Left_branch_up);
            Left_branch_up = Left_branch_up - 11;
        }
        // left branch dowm  
        let left_branch_down = parseInt(x[y]) + 9;
        while (((left_branch_down >= 0 && left_branch_down <= 7) || (left_branch_down >= 10 && left_branch_down <= 17) || (left_branch_down >= 20 && left_branch_down <= 27) || (left_branch_down >= 30 && left_branch_down <= 37) || (left_branch_down >= 40 && left_branch_down <= 47) || (left_branch_down >= 50 && left_branch_down <= 57) || (left_branch_down >= 60 && left_branch_down <= 67) || (left_branch_down >= 70 && left_branch_down <= 77)) &&  (document.getElementById(left_branch_down.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(left_branch_down.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            black_queen_pos.push(left_branch_down);
            left_branch_down = left_branch_down + 9;
        }
     return black_queen_pos;
    } else if(y == 11) {
        let a = parseInt(x[y]) + 10;
        while (((a >= 0 && a <= 7) || (a >= 10 && a <= 17) || (a >= 20 && a <= 27) || (a >= 30 && a <= 37) || (a >= 40 && a <= 47) || (a >= 50 && a <= 57) || (a >= 60 && a <= 67) || (a >= 70 && a <= 77)) && (document.getElementById(a.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(a.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_queen_pos.push(a);
            a = a + 10; // a = 60
        }
        // Vertical up
        let up = parseInt(x[y]) - 10;
        while (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) &&  (document.getElementById(up.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(up.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_queen_pos.push(up);
            up = up - 10; // a = 60
        }
        // horizonatl right 
        let k = parseInt(x[y]) + 1;
        while (((k >= 0 && k <= 7) || (k >= 10 && k <= 17) || (k >= 20 && k <= 27) || (k >= 30 && k <= 37) || (k >= 40 && k <= 47) || (k >= 50 && k <= 57) || (k >= 60 && k <= 67) || (k >= 70 && k <= 77)) &&  (document.getElementById(k.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(k.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_queen_pos.push(k);
            k = k + 1;
        }
        // horizonatl left
        let b = parseInt(x[y]) - 1;
        while (((b >= 0 && b <= 7) || (b >= 10 && b <= 17) || (b >= 20 && b <= 27) || (b >= 30 && b <= 37) || (b >= 40 && b <= 47) || (b >= 50 && b <= 57) || (b >= 60 && b <= 67) || (b >= 70 && b <= 77)) &&  (document.getElementById(b.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(b.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_queen_pos.push(b);
            b = b - 1;
        }
        // Right branch up  
        let Right_branch_up = parseInt(x[y]) - 9;
        while (((Right_branch_up >= 0 && Right_branch_up <= 7) || (Right_branch_up >= 10 && Right_branch_up <= 17) || (Right_branch_up >= 20 && Right_branch_up <= 27) || (Right_branch_up >= 30 && Right_branch_up <= 37) || (Right_branch_up >= 40 && Right_branch_up <= 47) || (Right_branch_up >= 50 && Right_branch_up <= 57) || (Right_branch_up >= 60 && Right_branch_up <= 67) || (Right_branch_up >= 70 && Right_branch_up <= 77)) &&  (document.getElementById(Right_branch_up.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(Right_branch_up.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_queen_pos.push(Right_branch_up);
            Right_branch_up = Right_branch_up - 9;
        }
        // Right branch down  
        let Right_branch_down = parseInt(x[y]) + 11;
        while (((Right_branch_down >= 0 && Right_branch_down <= 7) || (Right_branch_down >= 10 && Right_branch_down <= 17) || (Right_branch_down >= 20 && Right_branch_down <= 27) || (Right_branch_down >= 30 && Right_branch_down <= 37) || (Right_branch_down >= 40 && Right_branch_down <= 47) || (Right_branch_down >= 50 && Right_branch_down <= 57) || (Right_branch_down >= 60 && Right_branch_down <= 67) || (Right_branch_down >= 70 && Right_branch_down <= 77)) &&  (document.getElementById(Right_branch_down.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(Right_branch_down.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_queen_pos.push(Right_branch_down);
            Right_branch_down = Right_branch_down + 11;
        }
        // left branch up   
        let Left_branch_up = parseInt(x[y]) - 11;
        while (((Left_branch_up >= 0 && Left_branch_up <= 7) || (Left_branch_up >= 10 && Left_branch_up <= 17) || (Left_branch_up >= 20 && Left_branch_up <= 27) || (Left_branch_up >= 30 && Left_branch_up <= 37) || (Left_branch_up >= 40 && Left_branch_up <= 47) || (Left_branch_up >= 50 && Left_branch_up <= 57) || (Left_branch_up >= 60 && Left_branch_up <= 67) || (Left_branch_up >= 70 && Left_branch_up <= 77)) &&  (document.getElementById(Left_branch_up.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(Left_branch_up.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_queen_pos.push(Left_branch_up);
            Left_branch_up = Left_branch_up - 11;
        }
        // left branch dowm  
        let left_branch_down = parseInt(x[y]) + 9;
        while (((left_branch_down >= 0 && left_branch_down <= 7) || (left_branch_down >= 10 && left_branch_down <= 17) || (left_branch_down >= 20 && left_branch_down <= 27) || (left_branch_down >= 30 && left_branch_down <= 37) || (left_branch_down >= 40 && left_branch_down <= 47) || (left_branch_down >= 50 && left_branch_down <= 57) || (left_branch_down >= 60 && left_branch_down <= 67) || (left_branch_down >= 70 && left_branch_down <= 77)) &&  (document.getElementById(left_branch_down.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(left_branch_down.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_queen_pos.push(left_branch_down);
            left_branch_down = left_branch_down + 9;
        }
        return white_queen_pos;
    }
}
function check_bishop_1(x, y) {
    let bishop_pos_1 = [];
    let white_bishop_pos1 = [];
    if(y == 3.1) {
        let i = parseInt(x[y]) - 9;
        while(((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            bishop_pos_1.push(i);
            i = i-9;
        }
        // Right branch down
        let i2 = parseInt(x[y]) + 11;
        while(((i2 >= 0 && i2 <= 7) || (i2 >= 10 && i2 <= 17) || (i2 >= 20 && i2 <= 27) || (i2 >= 30 && i2 <= 37) || (i2 >= 40 && i2 <= 47) || (i2 >= 50 && i2 <= 57) || (i2 >= 60 && i2 <= 67) || (i2 >= 70 && i2 <= 77)) && (document.getElementById(i2.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i2.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            bishop_pos_1.push(i2);
            i2 = i2+11;
        }
        // left branch up 
        let i3 = parseInt(x[y]) - 11;   
        while(((i3 >= 0 && i3 <= 7) || (i3 >= 10 && i3 <= 17) || (i3 >= 20 && i3 <= 27) || (i3 >= 30 && i3 <= 37) || (i3 >= 40 && i3 <= 47) || (i3 >= 50 && i3 <= 57) || (i3 >= 60 && i3 <= 67) || (i3 >= 70 && i3 <= 77)) && (document.getElementById(i3.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i3.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            bishop_pos_1.push(i3);
            i3= i3-11;
        }
        // left branch dowm 
        let i4 = parseInt(x[y]) + 9;  
        while(((i4 >= 0 && i4 <= 7) || (i4 >= 10 && i4 <= 17) || (i4 >= 20 && i4 <= 27) || (i4 >= 30 && i4 <= 37) || (i4 >= 40 && i4 <= 47) || (i4 >= 50 && i4 <= 57) || (i4 >= 60 && i4 <= 67) || (i4 >= 70 && i4 <= 77)) && (document.getElementById(i4.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i4.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            bishop_pos_1.push(i4);
            i4 = i4+9;
        }
        return bishop_pos_1;
    } else if(y == 10.1) {
        let i = parseInt(x[y]) - 9;
        while(((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_bishop_pos1.push(i);
            i = i-9;
        }
        // Right branch down
        let i2 = parseInt(x[y]) + 11;
        while(((i2 >= 0 && i2 <= 7) || (i2 >= 10 && i2 <= 17) || (i2 >= 20 && i2 <= 27) || (i2 >= 30 && i2 <= 37) || (i2 >= 40 && i2 <= 47) || (i2 >= 50 && i2 <= 57) || (i2 >= 60 && i2 <= 67) || (i2 >= 70 && i2 <= 77)) && (document.getElementById(i2.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i2.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_bishop_pos1.push(i2);
            i2 = i2+11;
        }
        // left branch up 
        let i3 = parseInt(x[y]) - 11;   
        while(((i3 >= 0 && i3 <= 7) || (i3 >= 10 && i3 <= 17) || (i3 >= 20 && i3 <= 27) || (i3 >= 30 && i3 <= 37) || (i3 >= 40 && i3 <= 47) || (i3 >= 50 && i3 <= 57) || (i3 >= 60 && i3 <= 67) || (i3 >= 70 && i3 <= 77)) && (document.getElementById(i3.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i3.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_bishop_pos1.push(i3);
            i3= i3-11;
        }
        // left branch dowm 
        let i4 = parseInt(x[y]) + 9;  
        while(((i4 >= 0 && i4 <= 7) || (i4 >= 10 && i4 <= 17) || (i4 >= 20 && i4 <= 27) || (i4 >= 30 && i4 <= 37) || (i4 >= 40 && i4 <= 47) || (i4 >= 50 && i4 <= 57) || (i4 >= 60 && i4 <= 67) || (i4 >= 70 && i4 <= 77)) && (document.getElementById(i4.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i4.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_bishop_pos1.push(i4);
            i4 = i4+9;
        }
     return white_bishop_pos1;
    }
}
function check_bishop_2(x, y) {
    let bishop_pos_2 = [];
    let white_bishop_pos2 = [];
    if(y == 3.2) {
        let i = parseInt(x[y]) - 9;
        while(((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            bishop_pos_2.push(i);
            i = i-9;
        }
        // Right branch down
        let i2 = parseInt(x[y]) + 11;
        while(((i2 >= 0 && i2 <= 7) || (i2 >= 10 && i2 <= 17) || (i2 >= 20 && i2 <= 27) || (i2 >= 30 && i2 <= 37) || (i2 >= 40 && i2 <= 47) || (i2 >= 50 && i2 <= 57) || (i2 >= 60 && i2 <= 67) || (i2 >= 70 && i2 <= 77)) && (document.getElementById(i2.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i2.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            bishop_pos_2.push(i2);
            i2 = i2+11;
        }
        // left branch up 
        let i3 = parseInt(x[y]) - 11;   
        while(((i3 >= 0 && i3 <= 7) || (i3 >= 10 && i3 <= 17) || (i3 >= 20 && i3 <= 27) || (i3 >= 30 && i3 <= 37) || (i3 >= 40 && i3 <= 47) || (i3 >= 50 && i3 <= 57) || (i3 >= 60 && i3 <= 67) || (i3 >= 70 && i3 <= 77)) && (document.getElementById(i3.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i3.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            bishop_pos_2.push(i3);
            i3= i3-11;
        }
        // left branch dowm 
        let i4 = parseInt(x[y]) + 9;  
        while(((i4 >= 0 && i4 <= 7) || (i4 >= 10 && i4 <= 17) || (i4 >= 20 && i4 <= 27) || (i4 >= 30 && i4 <= 37) || (i4 >= 40 && i4 <= 47) || (i4 >= 50 && i4 <= 57) || (i4 >= 60 && i4 <= 67) || (i4 >= 70 && i4 <= 77)) && (document.getElementById(i4.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i4.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            bishop_pos_2.push(i4);
            i4 = i4+9;
        }
     return bishop_pos_2;
    } else if(y == 10.2) {
        let i = parseInt(x[y]) - 9;
        while(((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_bishop_pos2.push(i);
            i = i-9;
        }
        // Right branch down
        let i2 = parseInt(x[y]) + 11;
        while(((i2 >= 0 && i2 <= 7) || (i2 >= 10 && i2 <= 17) || (i2 >= 20 && i2 <= 27) || (i2 >= 30 && i2 <= 37) || (i2 >= 40 && i2 <= 47) || (i2 >= 50 && i2 <= 57) || (i2 >= 60 && i2 <= 67) || (i2 >= 70 && i2 <= 77)) && (document.getElementById(i2.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i2.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_bishop_pos2.push(i2);
            i2 = i2+11;
        }
        // left branch up 
        let i3 = parseInt(x[y]) - 11;   
        while(((i3 >= 0 && i3 <= 7) || (i3 >= 10 && i3 <= 17) || (i3 >= 20 && i3 <= 27) || (i3 >= 30 && i3 <= 37) || (i3 >= 40 && i3 <= 47) || (i3 >= 50 && i3 <= 57) || (i3 >= 60 && i3 <= 67) || (i3 >= 70 && i3 <= 77)) && (document.getElementById(i3.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i3.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_bishop_pos2.push(i3);
            i3= i3-11;
        }
        // left branch dowm 
        let i4 = parseInt(x[y]) + 9;  
        while(((i4 >= 0 && i4 <= 7) || (i4 >= 10 && i4 <= 17) || (i4 >= 20 && i4 <= 27) || (i4 >= 30 && i4 <= 37) || (i4 >= 40 && i4 <= 47) || (i4 >= 50 && i4 <= 57) || (i4 >= 60 && i4 <= 67) || (i4 >= 70 && i4 <= 77)) && (document.getElementById(i4.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i4.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_bishop_pos2.push(i4);
            i4 = i4+9;
        }
        return white_bishop_pos2;
    }   
}
function check_rook_1(x, y) {
    let rook_pos_1 = [];
    let white_rook_pos_1 = [];
    if(y==1.1) {
        // Vertical down
        let a = parseInt(x[y]) + 10;
        while (((a >= 0 && a <= 7) || (a >= 10 && a <= 17) || (a >= 20 && a <= 27) || (a >= 30 && a <= 37) || (a >= 40 && a <= 47) || (a >= 50 && a <= 57) || (a >= 60 && a <= 67) || (a >= 70 && a <= 77)) && (document.getElementById(a.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(a.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            rook_pos_1.push(a);
            a = a + 10; // a = 60
        }
        // Vertical up
        let up = parseInt(x[y]) - 10;
        while (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) &&  (document.getElementById(up.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(up.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            rook_pos_1.push(up);
            up = up - 10; // a = 60
        }
        // horizonatl right 
        let k = parseInt(x[y]) + 1;
        while (((k >= 0 && k <= 7) || (k >= 10 && k <= 17) || (k >= 20 && k <= 27) || (k >= 30 && k <= 37) || (k >= 40 && k <= 47) || (k >= 50 && k <= 57) || (k >= 60 && k <= 67) || (k >= 70 && k <= 77)) &&  (document.getElementById(k.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(k.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            rook_pos_1.push(k);
            k = k + 1;
        }
        // horizonatl left
        let b = parseInt(x[y]) - 1;
        while (((b >= 0 && b <= 7) || (b >= 10 && b <= 17) || (b >= 20 && b <= 27) || (b >= 30 && b <= 37) || (b >= 40 && b <= 47) || (b >= 50 && b <= 57) || (b >= 60 && b <= 67) || (b >= 70 && b <= 77)) &&  (document.getElementById(b.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(b.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            rook_pos_1.push(b);
            b = b - 1;
        }
        return rook_pos_1;
    } else if(y==8.1) {
                // Vertical down
                let a = parseInt(x[y]) + 10;
                while (((a >= 0 && a <= 7) || (a >= 10 && a <= 17) || (a >= 20 && a <= 27) || (a >= 30 && a <= 37) || (a >= 40 && a <= 47) || (a >= 50 && a <= 57) || (a >= 60 && a <= 67) || (a >= 70 && a <= 77)) && (document.getElementById(a.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(a.toString()).childNodes[0].attributes.src.value =='black king.png')) {
                    white_rook_pos_1.push(a);
                    a = a + 10; // a = 60
                }
                // Vertical up
                let up = parseInt(x[y]) - 10;
                while (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) &&  (document.getElementById(up.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(up.toString()).childNodes[0].attributes.src.value =='black king.png')) {
                    white_rook_pos_1.push(up);
                    up = up - 10; // a = 60
                }
                // horizonatl right 
                let k = parseInt(x[y]) + 1;
                while (((k >= 0 && k <= 7) || (k >= 10 && k <= 17) || (k >= 20 && k <= 27) || (k >= 30 && k <= 37) || (k >= 40 && k <= 47) || (k >= 50 && k <= 57) || (k >= 60 && k <= 67) || (k >= 70 && k <= 77)) &&  (document.getElementById(k.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(k.toString()).childNodes[0].attributes.src.value =='black king.png')) {
                    white_rook_pos_1.push(k);
                    k = k + 1;
                }
                // horizonatl left
                let b = parseInt(x[y]) - 1;
                while (((b >= 0 && b <= 7) || (b >= 10 && b <= 17) || (b >= 20 && b <= 27) || (b >= 30 && b <= 37) || (b >= 40 && b <= 47) || (b >= 50 && b <= 57) || (b >= 60 && b <= 67) || (b >= 70 && b <= 77)) &&  (document.getElementById(b.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(b.toString()).childNodes[0].attributes.src.value =='black king.png')) {
                    white_rook_pos_1.push(b);
                    b = b - 1;
                }
        return white_rook_pos_1;
    }
}
function check_rook_2(x, y) {
    let rook_pos_2 = [];
    let white_rook_pos_2 = [];
    if(y == 1.2) {
        // Vertical down
        let a = parseInt(x[y]) + 10;
        while (((a >= 0 && a <= 7) || (a >= 10 && a <= 17) || (a >= 20 && a <= 27) || (a >= 30 && a <= 37) || (a >= 40 && a <= 47) || (a >= 50 && a <= 57) || (a >= 60 && a <= 67) || (a >= 70 && a <= 77)) && (document.getElementById(a.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(a.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            rook_pos_2.push(a);
            a = a + 10; // a = 60
        }
        // Vertical up
        let up = parseInt(x[y]) - 10;
        while (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) &&  (document.getElementById(up.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(up.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            rook_pos_2.push(up);
            up = up - 10; // a = 60
        }
        // horizonatl right 
        let k = parseInt(x[y]) + 1;
        while (((k >= 0 && k <= 7) || (k >= 10 && k <= 17) || (k >= 20 && k <= 27) || (k >= 30 && k <= 37) || (k >= 40 && k <= 47) || (k >= 50 && k <= 57) || (k >= 60 && k <= 67) || (k >= 70 && k <= 77)) &&  (document.getElementById(k.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(k.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            rook_pos_2.push(k);
            k = k + 1;
        }
        // horizonatl left
        let b = parseInt(x[y]) - 1;
        while (((b >= 0 && b <= 7) || (b >= 10 && b <= 17) || (b >= 20 && b <= 27) || (b >= 30 && b <= 37) || (b >= 40 && b <= 47) || (b >= 50 && b <= 57) || (b >= 60 && b <= 67) || (b >= 70 && b <= 77)) &&  (document.getElementById(b.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(b.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            rook_pos_2.push(b);
            b = b - 1;
        }
        return rook_pos_2;
    } else if(y == 8.2) {
                // Vertical down
                let a = parseInt(x[y]) + 10;
                while (((a >= 0 && a <= 7) || (a >= 10 && a <= 17) || (a >= 20 && a <= 27) || (a >= 30 && a <= 37) || (a >= 40 && a <= 47) || (a >= 50 && a <= 57) || (a >= 60 && a <= 67) || (a >= 70 && a <= 77)) && (document.getElementById(a.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(a.toString()).childNodes[0].attributes.src.value =='black king.png')) {
                    white_rook_pos_2.push(a);
                    a = a + 10; // a = 60
                }
                // Vertical up
                let up = parseInt(x[y]) - 10;
                while (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) &&  (document.getElementById(up.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(up.toString()).childNodes[0].attributes.src.value =='black king.png')) {
                    white_rook_pos_2.push(up);
                    up = up - 10; // a = 60
                }
                // horizonatl right 
                let k = parseInt(x[y]) + 1;
                while (((k >= 0 && k <= 7) || (k >= 10 && k <= 17) || (k >= 20 && k <= 27) || (k >= 30 && k <= 37) || (k >= 40 && k <= 47) || (k >= 50 && k <= 57) || (k >= 60 && k <= 67) || (k >= 70 && k <= 77)) &&  (document.getElementById(k.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(k.toString()).childNodes[0].attributes.src.value =='black king.png')) {
                    white_rook_pos_2.push(k);
                    k = k + 1;
                }
                // horizonatl left
                let b = parseInt(x[y]) - 1;
                while (((b >= 0 && b <= 7) || (b >= 10 && b <= 17) || (b >= 20 && b <= 27) || (b >= 30 && b <= 37) || (b >= 40 && b <= 47) || (b >= 50 && b <= 57) || (b >= 60 && b <= 67) || (b >= 70 && b <= 77)) &&  (document.getElementById(b.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(b.toString()).childNodes[0].attributes.src.value =='black king.png')) {
                    white_rook_pos_2.push(b);
                    b = b - 1;
                }
        return white_rook_pos_2;
    }
}
function check_knight_1(x, y) {
    let knight_pos_1 = [];
    let white_knight_pos_1 = [];
    if(y == 2.1) {
        // Vertical Left L down: +19 
        let i = parseInt(x[y]) + 19;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_1.push(i);
        }
        // vertical left l up : -19
        i = parseInt(x[y]) - 19;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_1.push(i);
        }
        // vertical right l down : +21
        i = parseInt(x[y]) + 21;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_1.push(i);
        }
        // vertical right l up : -21
        i = parseInt(x[y]) - 21;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_1.push(i);
        }
        // horizontal left l down: +8
        i = parseInt(x[y]) + 8;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_1.push(i);
        }
        // horizontal left l up: -12 
        i = parseInt(x[y]) - 12;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_1.push(i);
        }
        // horizontal right l down : +12 
        i = parseInt(x[y]) + 12;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_1.push(i);
        }
        // horizontal right  l up : -8 
        i = parseInt(x[y]) - 8;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_1.push(i);
        }
    return knight_pos_1;
    } else if(y == 9.1) {
        // Vertical Left L down: +19  // 71
        let i = parseInt(x[y]) + 19;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_1.push(i);
        }
        // vertical left l up : -19 // 71-19=52
        i = parseInt(x[y]) - 19;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_1.push(i);
        }
        // vertical right l down : +21
        i = parseInt(x[y]) + 21;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_1.push(i);
        }
        // vertical right l up : -21
        i = parseInt(x[y]) - 21;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_1.push(i);
        }
        // horizontal left l down: +8
        i = parseInt(x[y]) + 8;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_1.push(i);
        }
        // horizontal left l up: -12 
        i = parseInt(x[y]) - 12;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_1.push(i);
        }
        // horizontal right l down : +12 
        i = parseInt(x[y]) + 12;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_1.push(i);
        }
        // horizontal right  l up : -8 
        i = parseInt(x[y]) - 8;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_1.push(i);
        }
        return white_knight_pos_1;
    }
}
function check_knight_2(x, y) {
    let knight_pos_2 = [];
    let white_knight_pos_2 = [];
    if(y == 2.2) {
        // Vertical Left L down: +19 
        let i = parseInt(x[y]) + 19;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_2.push(i);
        }
        // vertical left l up : -19
        i = parseInt(x[y]) - 19;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_2.push(i);
        }
        // vertical right l down : +21
        i = parseInt(x[y]) + 21;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_2.push(i);
        }
        // vertical right l up : -21
        i = parseInt(x[y]) - 21;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_2.push(i);
        }
        // horizontal left l down: +8
        i = parseInt(x[y]) + 8;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_2.push(i);
        }
        // horizontal left l up: -12 
        i = parseInt(x[y]) - 12;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_2.push(i);
        }
        // horizontal right l down : +12 
        i = parseInt(x[y]) + 12;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_2.push(i);
        }
        // horizontal right  l up : -8 
        i = parseInt(x[y]) - 8;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='white king.png')) {
            knight_pos_2.push(i);
        }
        return knight_pos_2;
    } else if(y == 9.2) {
                // Vertical Left L down: +19 
        let i = parseInt(x[y]) + 19;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_2.push(i);
        }
        // vertical left l up : -19
        i = parseInt(x[y]) - 19;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_2.push(i);
        }
        // vertical right l down : +21
        i = parseInt(x[y]) + 21;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_2.push(i);
        }
        // vertical right l up : -21
        i = parseInt(x[y]) - 21;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_2.push(i);
        }
        // horizontal left l down: +8
        i = parseInt(x[y]) + 8;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_2.push(i);
        }
        // horizontal left l up: -12 
        i = parseInt(x[y]) - 12;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_2.push(i);
        }
        // horizontal right l down : +12 
        i = parseInt(x[y]) + 12;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_2.push(i);
        }
        // horizontal right  l up : -8 
        i = parseInt(x[y]) - 8;
        if (((i >= 0 && i <= 7) || (i >= 10 && i <= 17) || (i >= 20 && i <= 27) || (i >= 30 && i <= 37) || (i >= 40 && i <= 47) || (i >= 50 && i <= 57) || (i >= 60 && i <= 67) || (i >= 70 && i <= 77)) && (document.getElementById(i.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(i.toString()).childNodes[0].attributes.src.value =='black king.png')) {
            white_knight_pos_2.push(i);
        }
        return white_knight_pos_2;
    }
}
function check_pawn(x,y) {
let pawn_pos_1 = [];
let pawn_pos_2 = [];
let pawn_pos_3 = [];
let pawn_pos_4 = [];
let pawn_pos_5 = [];
let pawn_pos_6 = [];
let pawn_pos_7 = [];
let pawn_pos_8 = [];
let white_pawn_pos_1 = [];
let white_pawn_pos_2 = [];
let white_pawn_pos_3 = [];
let white_pawn_pos_4 = [];
let white_pawn_pos_5 = [];
let white_pawn_pos_6 = [];
let white_pawn_pos_7 = [];
let white_pawn_pos_8 = [];
if(y == 6.1 || y == 6.2 || y == 6.3 || y == 6.4 || y == 6.5 || y == 6.6 || y == 6.7 || y == 6.8) {
    let up = parseInt(x[y]) - 10; // White ko check karne ke liye Black se 
    if (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) && (document.getElementById(up.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(up.toString()).childNodes[0].attributes.src.value =='black king.png')) {
        if(y == 6.1) {pawn_pos_1.push(up); return pawn_pos_1}
        else if(y == 6.2) {pawn_pos_2.push(up); return pawn_pos_2}
        else if(y == 6.3) {pawn_pos_3.push(up); return pawn_pos_3}
        else if(y == 6.4) {pawn_pos_4.push(up); return pawn_pos_4}
        else if(y == 6.5) {pawn_pos_5.push(up); return pawn_pos_5}
        else if(y == 6.6) {pawn_pos_6.push(up); return pawn_pos_6}
        else if(y == 6.7) {pawn_pos_7.push(up); return pawn_pos_7}
        else if(y == 6.8) {pawn_pos_8.push(up); return pawn_pos_8}
    }
} else if(y == 7.1 || y == 7.2 || y == 7.3 || y == 7.4 || y == 7.5 || y == 7.6 || y == 7.7 || y == 7.8) {
    let dwn = parseInt(x[y]) + 10; // Blackelse if(y == 7.1) {white_pawn_pos_1.push(up); return white_pawn_pos_1}
    if (((dwn >= 0 && dwn <= 7) || (dwn >= 10 && dwn <= 17) || (dwn >= 20 && dwn <= 27) || (dwn >= 30 && dwn <= 37) || (dwn >= 40 && dwn <= 47) || (dwn >= 50 && dwn <= 57) || (dwn >= 60 && dwn <= 67) || (dwn >= 70 && dwn <= 77)) && (document.getElementById(dwn.toString()).childNodes[0].attributes.src.value == ' ' || document.getElementById(dwn.toString()).childNodes[0].attributes.src.value =='white king.png')) {
        if(y == 7.1) {white_pawn_pos_2.push(dwn); return white_pawn_pos_1}
        else if(y == 7.2) {white_pawn_pos_2.push(dwn);return white_pawn_pos_3}
        else if(y == 7.3) {white_pawn_pos_3.push(dwn);return white_pawn_pos_3}
        else if(y == 7.4) {white_pawn_pos_4.push(dwn);return white_pawn_pos_4}
        else if(y == 7.5) {white_pawn_pos_5.push(dwn);return white_pawn_pos_5}
        else if(y == 7.6) {white_pawn_pos_6.push(dwn);return white_pawn_pos_6}
        else if(y == 7.7) {white_pawn_pos_7.push(dwn);return white_pawn_pos_7}
        else if(y == 7.8) {white_pawn_pos_8.push(dwn);return white_pawn_pos_8}
    }
}
}
let a;
console.log("Main Function Before Ident");
function return_photo(y) {
    if (y == 1.1) return `<img src="black rook_1.png">`;
    else if (y == 1.2) return `<img src="black rook_2.png">`;
    else if (y == 2.1) return `<img src="black knight_1.png">`;
    else if (y == 2.2) return `<img src="black knight_2.png">`;
    else if (y == 3.1) return `<img src="black bishop_1.png">`;
    else if (y == 3.2) return `<img src="black bishop_2.png">`;
    else if (y == 4) return `<img src="black queen.png">`;
    else if (y == 5) return `<img src="black king.png">`;
    else if (y == 6.1) return `<img src="black pawn_1.png">`;
    else if (y == 6.2) return `<img src="black pawn_2.png">`;
    else if (y == 6.3) return `<img src="black pawn_3.png">`;
    else if (y == 6.4) return `<img src="black pawn_4.png">`;
    else if (y == 6.5) return `<img src="black pawn_5.png">`;
    else if (y == 6.6) return `<img src="black pawn_6.png">`;
    else if (y == 6.7) return `<img src="black pawn_7.png">`;
    else if (y == 6.8) return `<img src="black pawn_8.png">`;
    else if (y == 7.1) return `<img src="white pawn_1.png">`;
    else if (y == 7.2) return `<img src="white pawn_2.png">`;
    else if (y == 7.3) return `<img src="white pawn_3.png">`;
    else if (y == 7.4) return `<img src="white pawn_4.png">`;
    else if (y == 7.5) return `<img src="white pawn_5.png">`;
    else if (y == 7.6) return `<img src="white pawn_6.png">`;
    else if (y == 7.7) return `<img src="white pawn_7.png">`;
    else if (y == 7.8) return `<img src="white pawn_8.png">`;
    else if (y == 8.1) return `<img src="white rook_1.png">`;
    else if (y == 8.2) return `<img src="white rook_2.png">`;
    else if (y == 9.1) return `<img src="white knight_1.png">`;
    else if (y == 9.2) return `<img src="white knight_2.png">`;
    else if (y == 10.1) return `<img src="white bishop_1.png" >`;
    else if (y == 10.2) return `<img src="white bishop_2.png" >`;
    else if (y == 11) return `<img src="white queen.png">`;
    else if (y == 12) return `<img src="white king.png">`;
}
// Remove DOTS FOR LEFT L SHAPE for DOWN
function Vertical_remove_left_L_shape_down_dot() {
    let h = parseInt(start_pos) + 19;
    if (((h >= 0 && h <= 7) || (h >= 10 && h <= 17) || (h >= 20 && h <= 27) || (h >= 30 && h <= 37) || (h >= 40 && h <= 47) || (h >= 50 && h <= 57) || (h >= 60 && h <= 67) || (h >= 70 && h <= 77)) && document.getElementById(h.toString()).attributes["highlight"].value == 'true') {
        document.getElementById(h.toString()).attributes["highlight"].value = false;
        removeDot(h.toString());
    }
}
function horizontal_remove_left_L_shape_down() {
    let h = parseInt(start_pos) + 8; // startpos = 61 , 61 + 10 = 71
    if (((h >= 0 && h <= 7) || (h >= 10 && h <= 17) || (h >= 20 && h <= 27) || (h >= 30 && h <= 37) || (h >= 40 && h <= 47) || (h >= 50 && h <= 57) || (h >= 60 && h <= 67) || (h >= 70 && h <= 77)) && document.getElementById(h.toString()).attributes["highlight"].value == 'true') {
        document.getElementById(h.toString()).attributes["highlight"].value = false;
        removeDot(h.toString());
    }
}
// Remove DOTS FOR LEFT L SHAPE for UP
function Vertical_remove_left_L_shape_up_dot() {
    let h = parseInt(start_pos) - 19; // startpos = 61 , 61 + 10 = 71
    if (((h >= 0 && h <= 7) || (h >= 10 && h <= 17) || (h >= 20 && h <= 27) || (h >= 30 && h <= 37) || (h >= 40 && h <= 47) || (h >= 50 && h <= 57) || (h >= 60 && h <= 67) || (h >= 70 && h <= 77)) && document.getElementById(h.toString()).attributes["highlight"].value == 'true') {
        document.getElementById(h.toString()).attributes["highlight"].value = false;
        removeDot(h.toString());
    }
}
function horizontal_remove_left_L_shape_up() {
    let h = parseInt(start_pos) - 12; // startpos = 61 , 61 + 10 = 71
    if (((h >= 0 && h <= 7) || (h >= 10 && h <= 17) || (h >= 20 && h <= 27) || (h >= 30 && h <= 37) || (h >= 40 && h <= 47) || (h >= 50 && h <= 57) || (h >= 60 && h <= 67) || (h >= 70 && h <= 77)) && document.getElementById(h.toString()).attributes["highlight"].value == 'true') {
        document.getElementById(h.toString()).attributes["highlight"].value = false;
        removeDot(h.toString());
    }
}
// REMOVE DOTS FOR RIGHT L SHAPE for DOWN 
function Vertical_remove_right_L_shape_down_dot() {
    let h = parseInt(start_pos) + 21; // startpos = 61 , 61 + 10 = 71
    if (((h >= 0 && h <= 7) || (h >= 10 && h <= 17) || (h >= 20 && h <= 27) || (h >= 30 && h <= 37) || (h >= 40 && h <= 47) || (h >= 50 && h <= 57) || (h >= 60 && h <= 67) || (h >= 70 && h <= 77)) && document.getElementById(h.toString()).attributes["highlight"].value == 'true') {
        document.getElementById(h.toString()).attributes["highlight"].value = false;
        removeDot(h.toString());
    }
}
function horizontal_remove_right_L_shape_down() {
    let h = parseInt(start_pos) + 12; // startpos = 61 , 61 + 10 = 71
    if (((h >= 0 && h <= 7) || (h >= 10 && h <= 17) || (h >= 20 && h <= 27) || (h >= 30 && h <= 37) || (h >= 40 && h <= 47) || (h >= 50 && h <= 57) || (h >= 60 && h <= 67) || (h >= 70 && h <= 77)) && document.getElementById(h.toString()).attributes["highlight"].value == 'true') {
        document.getElementById(h.toString()).attributes["highlight"].value = false;
        removeDot(h.toString());
    }
}
function horizontal_remove_right_L_shape_up() {
    let h = parseInt(start_pos) - 8; // startpos = 61 , 61 + 10 = 71
    if (((h >= 0 && h <= 7) || (h >= 10 && h <= 17) || (h >= 20 && h <= 27) || (h >= 30 && h <= 37) || (h >= 40 && h <= 47) || (h >= 50 && h <= 57) || (h >= 60 && h <= 67) || (h >= 70 && h <= 77)) && document.getElementById(h.toString()).attributes["highlight"].value == 'true') {
        document.getElementById(h.toString()).attributes["highlight"].value = false;
        removeDot(h.toString());
    }
}
// REMOVE DOTS FOR RIGHT L SHAPE for UP 
function Vertical_remove_right_L_shape_up_dot() {
    let h = parseInt(start_pos) - 21; // startpos = 61 , 61 + 10 = 71
    if (((h >= 0 && h <= 7) || (h >= 10 && h <= 17) || (h >= 20 && h <= 27) || (h >= 30 && h <= 37) || (h >= 40 && h <= 47) || (h >= 50 && h <= 57) || (h >= 60 && h <= 67) || (h >= 70 && h <= 77)) && document.getElementById(h.toString()).attributes["highlight"].value == 'true') {

        document.getElementById(h.toString()).attributes["highlight"].value = false;
        removeDot(h.toString());
    }
}
// // FOR VERTICAL DOWN Remove Dot for Black
function remove_vertical_down_dots() {
    let h = parseInt(start_pos) + 10; // startpos = 61 , 61 + 10 = 71
    while (((h >= 0 && h <= 7) || (h >= 10 && h <= 17) || (h >= 20 && h <= 27) || (h >= 30 && h <= 37) || (h >= 40 && h <= 47) || (h >= 50 && h <= 57) || (h >= 60 && h <= 67) || (h >= 70 && h <= 77)) && document.getElementById(h.toString()).attributes["highlight"].value == 'true') {
        document.getElementById(h.toString()).attributes["highlight"].value = false;
        removeDot(h.toString());
        h = parseInt(h) + 10;
    }
}
// FOR VERTICAL UP Remove Dot for Black
function remove_vertical_up_dots() {
    let h2 = parseInt(start_pos) - 10;
    while (((h2 >= 0 && h2 <= 7) || (h2 >= 10 && h2 <= 17) || (h2 >= 20 && h2 <= 27) || (h2 >= 30 && h2 <= 37) || (h2 >= 40 && h2 <= 47) || (h2 >= 50 && h2 <= 57) || (h2 >= 60 && h2 <= 67) || (h2 >= 70 && h2 <= 77)) && document.getElementById(h2.toString()).attributes["highlight"].value == 'true') {
        document.getElementById(h2.toString()).attributes["highlight"].value = false;
        removeDot(h2.toString());
        h2 = parseInt(h2) - 10;
    }
}
// FOR HORIZONTAL RIGHT Remove Dot for Black
function remove_horizontal_right_dots() {

    let v = parseInt(start_pos) + 1; //  v = 61 + 1 = 62
    while (((v >= 0 && v <= 7) || (v >= 10 && v <= 17) || (v >= 20 && v <= 27) || (v >= 30 && v <= 37) || (v >= 40 && v <= 47) || (v >= 50 && v <= 57) || (v >= 60 && v <= 67) || (v >= 70 && v <= 77)) && document.getElementById(v.toString()).attributes["highlight"].value == 'true') {

        document.getElementById(v.toString()).attributes["highlight"].value = false;
        removeDot(v.toString());
        v = parseInt(v) + 1;
    }
}
// FOR HORIZONTAL LEFT Remove Dot for Black
function remove_horizontal_left_dots() {

    let v1 = parseInt(start_pos) - 1; // v1 = 61 - 1 = 60
    while (((v1 >= 0 && v1 <= 7) || (v1 >= 10 && v1 <= 17) || (v1 >= 20 && v1 <= 27) || (v1 >= 30 && v1 <= 37) || (v1 >= 40 && v1 <= 47) || (v1 >= 50 && v1 <= 57) || (v1 >= 60 && v1 <= 67) || (v1 >= 70 && v1 <= 77)) && document.getElementById(v1.toString()).attributes["highlight"].value == 'true') {

        document.getElementById(v1.toString()).attributes["highlight"].value = false;
        removeDot(v1.toString());
        v1 = v1 - 1;
    }
}
// Left_Branch_down Remove dots
function remove_left_branch_down_dots() {

    let lft_dwn = parseInt(start_pos) + 9;
    while (((lft_dwn >= 0 && lft_dwn <= 7) || (lft_dwn >= 10 && lft_dwn <= 17) || (lft_dwn >= 20 && lft_dwn <= 27) || (lft_dwn >= 30 && lft_dwn <= 37) || (lft_dwn >= 40 && lft_dwn <= 47) || (lft_dwn >= 50 && lft_dwn <= 57) || (lft_dwn >= 60 && lft_dwn <= 67) || (lft_dwn >= 70 && lft_dwn <= 77)) && document.getElementById(lft_dwn.toString()).attributes["highlight"].value == 'true') {

        document.getElementById(lft_dwn.toString()).attributes["highlight"].value = false;
        removeDot(lft_dwn.toString());
        lft_dwn = lft_dwn + 9;
    }
}
function remove_right_branch_up_dots() {

    let rht_up = parseInt(start_pos) - 9;
    while (((rht_up >= 0 && rht_up <= 7) || (rht_up >= 10 && rht_up <= 17) || (rht_up >= 20 && rht_up <= 27) || (rht_up >= 30 && rht_up <= 37) || (rht_up >= 40 && rht_up <= 47) || (rht_up >= 50 && rht_up <= 57) || (rht_up >= 60 && rht_up <= 67) || (rht_up >= 70 && rht_up <= 77)) && document.getElementById(rht_up.toString()).attributes["highlight"].value == 'true') {
        document.getElementById(rht_up.toString()).attributes["highlight"].value = false;

        document.getElementById(rht_up.toString()).attributes["highlight"].value = false;
        removeDot(rht_up.toString());
        rht_up = rht_up - 9;
    }
}
function remove_right_branch_down_dots() {

    let rht_down = parseInt(start_pos) + 11;
    while (((rht_down >= 0 && rht_down <= 7) || (rht_down >= 10 && rht_down <= 17) || (rht_down >= 20 && rht_down <= 27) || (rht_down >= 30 && rht_down <= 37) || (rht_down >= 40 && rht_down <= 47) || (rht_down >= 50 && rht_down <= 57) || (rht_down >= 60 && rht_down <= 67) || (rht_down >= 70 && rht_down <= 77)) && document.getElementById(rht_down.toString()).attributes["highlight"].value == 'true') {
        document.getElementById(rht_down.toString()).attributes["highlight"].value = false;
        removeDot(rht_down.toString());
        rht_down = rht_down + 11;
    }
}
function remove_left_branch_up_dots() {

    let lft_up = parseInt(start_pos) - 11;
    while (((lft_up >= 0 && lft_up <= 7) || (lft_up >= 10 && lft_up <= 17) || (lft_up >= 20 && lft_up <= 27) || (lft_up >= 30 && lft_up <= 37) || (lft_up >= 40 && lft_up <= 47) || (lft_up >= 50 && lft_up <= 57) || (lft_up >= 60 && lft_up <= 67) || (lft_up >= 70 && lft_up <= 77)) && document.getElementById(lft_up.toString()).attributes["highlight"].value == 'true') {

        document.getElementById(lft_up.toString()).attributes["highlight"].value = false;
        removeDot(lft_up.toString());
        lft_up = lft_up - 11;
    }
}
let checked_pos = [];
var attack_position = {};
function identifier(x) {
    console.log("x in identifier : " + x);
    if (document.getElementById(x).attributes["highlight"].value == 'true') {
        console.log("Highlight Wali Case");
        let image = return_photo(check_state);
        document.getElementById(x).innerHTML = image;
        current_position[check_state] = x;
       attack_position = {
            1.1: check_rook_1(current_position,1.1),
            1.2: check_rook_2(current_position,1.2),
            2.1: check_knight_1(current_position,2.1),
            2.2: check_knight_2(current_position,2.2),
            3.1: check_bishop_1(current_position,3.1),
            3.2: check_bishop_2(current_position,3.2),
            4: check_queen(current_position,4),
            5: "Black King",
            6.1: check_pawn(current_position,6.1),
            6.2: check_pawn(current_position,6.2),
            6.3: check_pawn(current_position,6.3),
            6.4: check_pawn(current_position,6.4),
            6.5: check_pawn(current_position,6.5),
            6.6: check_pawn(current_position,6.6),
            6.7: check_pawn(current_position,6.7),
            6.8: check_pawn(current_position,6.8),
            7.1: check_pawn(current_position,7.1),
            7.2: check_pawn(current_position,7.2),
            7.3: check_pawn(current_position,7.3),
            7.4: check_pawn(current_position,7.4),
            7.5: check_pawn(current_position,7.5),
            7.6: check_pawn(current_position,7.6),
            7.7: check_pawn(current_position,7.7),
            7.8: check_pawn(current_position,7.8),
            8.1: check_rook_1(current_position,8.1),
            8.2: check_rook_2(current_position,8.2),
            9.1: check_knight_1(current_position,9.1),
            9.2: check_knight_2(current_position,9.2),
            10.1: check_bishop_1(current_position,10.1),
            10.2: check_bishop_2(current_position,10.2),
            11: check_queen(current_position,11),
            12: "White King"
        };
        console.log(attack_position);
        // FOR BLACK Q,B,K,R
        // check_pawn(current_position,6.1);
        // check_pawn(current_position,6.2);
        // check_pawn(current_position,6.3);
        // check_pawn(current_position,6.4);
        // check_pawn(current_position,6.5);
        // check_pawn(current_position,6.6);
        // check_pawn(current_position,6.7);
        // check_pawn(current_position,6.8);
        // check_queen(current_position, 4);
        // check_bishop_1(current_position, 3.1);
        // check_bishop_2(current_position, 3.2); 
        // check_knight_1(current_position, 2.1);
        // check_knight_2(current_position, 2.2);
        // check_rook_1(current_position, 1.1);
        // check_rook_2(current_position, 1.2);
        // black_queen_pos= black_queen_pos.concat(pawn_pos_1);
        // black_queen_pos= black_queen_pos.concat(pawn_pos_2);
        // black_queen_pos= black_queen_pos.concat(pawn_pos_3)
        // black_queen_pos= black_queen_pos.concat(pawn_pos_4);
        // black_queen_pos= black_queen_pos.concat(pawn_pos_5);
        // black_queen_pos= black_queen_pos.concat(pawn_pos_6);
        // black_queen_pos= black_queen_pos.concat(pawn_pos_7);
        // black_queen_pos= black_queen_pos.concat(pawn_pos_8);
        // black_queen_pos= black_queen_pos.concat(bishop_pos_1);
        // black_queen_pos= black_queen_pos.concat(bishop_pos_2);
        // black_queen_pos= black_queen_pos.concat(rook_pos_1);
        // black_queen_pos= black_queen_pos.concat(rook_pos_2);
        // black_queen_pos= black_queen_pos.concat(knight_pos_1);
        // black_queen_pos= black_queen_pos.concat(knight_pos_2);
        // for (let a = 0; a < black_queen_pos.length; a++) {
        //     // for (let b = 0; b < king_pos.length; b++) {
        //     //     if (queen_pos[a] == king_pos[b]) {
        //     //         checked_pos.push(queen_pos[a]);
        //     //     }
        //     // }
        //     if (black_queen_pos[a] == parseInt(current_position[12])) {
        //         console.log("black_queen_pos: " + black_queen_pos[a] + ": King_pos : " + parseInt(x[12]));
        //         document.getElementById(black_queen_pos[a].toString()).style.backgroundColor = 'red';
        //         console.log("White King is Checked");
        //         alert("White King is Checked");
        //     }
        // }
        // For White Q,B,K,R
        // check_pawn(current_position,7.1);
        // check_pawn(current_position,7.2);
        // check_pawn(current_position,7.3);
        // check_pawn(current_position,7.4);
        // check_pawn(current_position,7.5);
        // check_pawn(current_position,7.6);
        // check_pawn(current_position,7.7);
        // check_pawn(current_position,7.8);
        // check_queen(current_position,11);
        // check_bishop_1(current_position,10.1); // White bishop 1 
        // check_bishop_2(current_position,10.2); // white bishop 2
        // check_knight_1(current_position, 9.1); // White Knight 1
        // check_knight_2(current_position, 9.2); // White Knight 2
        // check_rook_1(current_position, 8.1); // White Rook 1
        // check_rook_2(current_position, 8.2); // White Rook 2
        // white_queen_pos = white_queen_pos.concat(white_pawn_pos_1);
        // white_queen_pos = white_queen_pos.concat(white_pawn_pos_2);
        // white_queen_pos = white_queen_pos.concat(white_pawn_pos_3);
        // white_queen_pos = white_queen_pos.concat(white_pawn_pos_4);
        // white_queen_pos = white_queen_pos.concat(white_pawn_pos_5);
        // white_queen_pos = white_queen_pos.concat(white_pawn_pos_6);
        // white_queen_pos = white_queen_pos.concat(white_pawn_pos_7);
        // white_queen_pos = white_queen_pos.concat(white_pawn_pos_8);
        // white_queen_pos = white_queen_pos.concat(white_bishop_pos1);
        // white_queen_pos = white_queen_pos.concat(white_bishop_pos2);
        // white_queen_pos = white_queen_pos.concat(white_knight_pos_1);
        // white_queen_pos = white_queen_pos.concat(white_knight_pos_2);
        // white_queen_pos = white_queen_pos.concat(white_rook_pos_1);
        // white_queen_pos = white_queen_pos.concat(white_rook_pos_2);
        // for(let w = 0; w < white_queen_pos.length; w++) {
        //     if(white_queen_pos[w] == parseInt(current_position[5])) {
        //         console.log("white_queen_pos: " + white_queen_pos[w] + ": King_pos : " + parseInt(x[5]));
        //         document.getElementById(white_queen_pos[w].toString()).style.backgroundColor = 'red';
        //         console.log("Black King is Checked");
        //         alert("Black King is Checked");
        //     }
        // }
        value = false;
        z++;
        document.getElementById(start_pos).innerHTML = `<img src=" ">`;
        if (check_state == 9.1 || check_state == 9.2 || check_state == 2.1 || check_state == 2.2) {
            Vertical_remove_left_L_shape_down_dot();
            Vertical_remove_left_L_shape_up_dot();
            Vertical_remove_right_L_shape_down_dot();
            Vertical_remove_right_L_shape_up_dot();
            horizontal_remove_left_L_shape_up(x);
            horizontal_remove_left_L_shape_down(x);
            horizontal_remove_right_L_shape_up(x);
            horizontal_remove_right_L_shape_down(x);
        } else {
            remove_vertical_down_dots();
            remove_vertical_up_dots();
            remove_horizontal_right_dots();
            remove_horizontal_left_dots();
            remove_left_branch_down_dots();
            remove_right_branch_up_dots();
            remove_right_branch_down_dots();
            remove_left_branch_up_dots();
            blackPawnPromotion(x);
            whitePawnPromotion(x);
        }
    } else {
        console.log("Not Highlight Case");
        a = document.getElementById(x).childNodes[0].getAttribute("src");
        if (a == " ") {
            console.log("Empty Hain");
        } else if (a == 'black bishop_1.png') {
            check_state = 3.1;
            start_pos = x;
            if (z % 2 != 0) { bishop(x); }
        } else if (a == 'black bishop_2.png') {
            check_state = 3.2;
            start_pos = x;
            if (z % 2 != 0) { bishop(x); }
        } else if (a == 'black king.png') {
            check_state = 5;
            start_pos = x;
            if (z % 2 != 0) { king(x); }
        } else if (a == 'black knight_1.png') {
            check_state = 2.1;
            start_pos = x;
            if (z % 2 != 0) { knight(x); }
        } else if (a == 'black knight_2.png') {
            check_state = 2.2;
            start_pos = x;
            if (z % 2 != 0) { knight(x); }
        } else if (a == 'black pawn_1.png') {
            check_state = 6.1;
            start_pos = x;
            if (z % 2 != 0) { black_pawn(x); };
        } else if (a == 'black pawn_2.png') {
            check_state = 6.2;
            start_pos = x;
            if (z % 2 != 0) { black_pawn(x); };
        } else if (a == 'black pawn_3.png') {
            check_state = 6.3;
            start_pos = x;
            if (z % 2 != 0) { black_pawn(x); };
        } else if (a == 'black pawn_4.png') {
            check_state = 6.4;
            start_pos = x;
            if (z % 2 != 0) { black_pawn(x); };
        } else if (a == 'black pawn_5.png') {
            check_state = 6.5;
            start_pos = x;
            if (z % 2 != 0) { black_pawn(x); };
        } else if (a == 'black pawn_6.png') {
            check_state = 6.6;
            start_pos = x;
            if (z % 2 != 0) { black_pawn(x); };
        } else if (a == 'black pawn_7.png') {
            check_state = 6.7;
            start_pos = x;
            if (z % 2 != 0) { black_pawn(x); };
        } else if (a == 'black pawn_8.png') {
            check_state = 6.8;
            start_pos = x;
            if (z % 2 != 0) { black_pawn(x); };
        } else if (a == 'black queen.png') {
            check_state = 4;
            start_pos = x;
            if (z % 2 != 0) { queen(x); }
        } else if (a == 'black rook_1.png') {
            check_state = 1.1;
            start_pos = x;
            if (z % 2 != 0) { rook(x); }
        } else if (a == 'black rook_2.png') {
            check_state = 1.2;
            start_pos = x;
            if (z % 2 != 0) { rook(x); };
        } else if (a == 'white bishop_1.png') {
            check_state = 10.1;
            start_pos = x;
            if (z % 2 == 0) { bishop(x); }
        } else if (a == 'white bishop_2.png') {
            check_state = 10.2;
            start_pos = x;
            if (z % 2 == 0) { bishop(x); }
        } else if (a == 'white king.png') {
            check_state = 12;
            start_pos = x;
            if (z % 2 == 0) { king(x); }
        } else if (a == 'white knight_1.png') {
            check_state = 9.1;
            start_pos = x;
            if (z % 2 == 0) { knight(x); }
        } else if (a == 'white knight_2.png') {
            check_state = 9.2;
            start_pos = x;
            if (z % 2 == 0) { knight(x); }
        } else if (a == 'white pawn_1.png') {
            check_state = 7.1;
            start_pos = x;
            if (z % 2 == 0) { white_pawn(x) };
        } else if (a == 'white pawn_2.png') {
            check_state = 7.2;
            start_pos = x;
            if (z % 2 == 0) { white_pawn(x) };
        } else if (a == 'white pawn_3.png') {
            check_state = 7.3;
            start_pos = x;
            if (z % 2 == 0) { white_pawn(x) };
        } else if (a == 'white pawn_4.png') {
            check_state = 7.4;
            start_pos = x;
            if (z % 2 == 0) { white_pawn(x) };
        } else if (a == 'white pawn_5.png') {
            check_state = 7.5;
            start_pos = x;
            if (z % 2 == 0) { white_pawn(x) };
        } else if (a == 'white pawn_6.png') {
            check_state = 7.6;
            start_pos = x;
            if (z % 2 == 0) { white_pawn(x) };
        } else if (a == 'white pawn_7.png') {
            check_state = 7.7;
            start_pos = x;
            if (z % 2 == 0) { white_pawn(x) };
        } else if (a == 'white pawn_8.png') {
            check_state = 7.8;
            start_pos = x;
            if (z % 2 == 0) { white_pawn(x) };
        } else if (a == 'white queen.png') {
            check_state = 11;
            start_pos = x;
            if (z % 2 == 0) { queen(x); }
        } else if (a == 'white rook_1.png') {
            check_state = 8.1;
            start_pos = x;
            if (z % 2 == 0) { rook(x); }
        } else if (a == 'white rook_2.png') {
            check_state = 8.2;
            start_pos = x;
            if (z % 2 == 0) { rook(x); }
        }

    }
}
function dot(position) {
    let b = document.createElement('div');
    b.classList.add('dot');
    b.style.position = 'absolute';
    b.style.zIndex = '1';
    b.style.backgroundColor = "red";
    b.style.opacity = '50%';
    b.style.marginLeft = "35px";
    b.style.marginTop = '-52px';
    b.style.height = "20px";
    b.style.width = "20px";
    b.style.borderRadius = "50%";
    document.getElementById(position).appendChild(b);
    prevDotPosition.push(position);
}
function removeDot(position) {
    var parentElement = document.getElementById(position);
    var dot = parentElement.querySelector('.dot');
    if (dot) {
        parentElement.removeChild(dot);
    }
}
function removePrevDot() {
    // Remove dots for each position in dotPositions array
    prevDotPosition.forEach(position => {
        var dot = document.getElementById(position).querySelector('.dot');
        if (dot) {
            document.getElementById(position).attributes["highlight"].value = false;
            dot.parentNode.removeChild(dot);
        }
    });
    prevDotPosition = [];
}
function check(j) {
    return document.getElementById(j).childNodes[0].getAttribute("src");
}
function vertical_down_pawn(x) {
    let up = parseInt(x) + 10;
    if (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) && document.getElementById(up.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(up.toString()).attributes["highlight"].value = true;
        dot(up.toString());
    }
}
function vertical_up_pawn(x) {
    let up = parseInt(x) - 10;
    if (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) && document.getElementById(up.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(up.toString()).attributes["highlight"].value = true;
        dot(up.toString());
    }
}
function left_cut_down_pawn(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let pos = parseInt(x) + 9;
    // LEFT BRANCH main white ko marne ke liye Dots in case of DOWN MOVE
    if (check_prev == 'black') {
        if (((pos >= 0 && pos <= 7) || (pos >= 10 && pos <= 17) || (pos >= 20 && pos <= 27) || (pos >= 30 && pos <= 37) || (pos >= 40 && pos <= 47) || (pos >= 50 && pos <= 57) || (pos >= 60 && pos <= 67) || (pos >= 70 && pos <= 77)) && document.getElementById(pos.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(pos.toString()).attributes["highlight"].value = true;
            dot(pos.toString());
        }
    } else if (check_prev == 'white') {
        if (((pos >= 0 && pos <= 7) || (pos >= 10 && pos <= 17) || (pos >= 20 && pos <= 27) || (pos >= 30 && pos <= 37) || (pos >= 40 && pos <= 47) || (pos >= 50 && pos <= 57) || (pos >= 60 && pos <= 67) || (pos >= 70 && pos <= 77)) && document.getElementById(pos.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(pos.toString()).attributes["highlight"].value = true;
            dot(pos.toString());
        }
    }
}
function left_cut_up_pawn(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let pos = parseInt(x) - 11;
    // LEFT BRANCH main white ko marne ke liye Dots in case of DOWN MOVE
    if (check_prev == 'black') {
        if (((pos >= 0 && pos <= 7) || (pos >= 10 && pos <= 17) || (pos >= 20 && pos <= 27) || (pos >= 30 && pos <= 37) || (pos >= 40 && pos <= 47) || (pos >= 50 && pos <= 57) || (pos >= 60 && pos <= 67) || (pos >= 70 && pos <= 77)) && document.getElementById(pos.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(pos.toString()).attributes["highlight"].value = true;
            dot(pos.toString());
        }
    } else if (check_prev == 'white') {
        if (((pos >= 0 && pos <= 7) || (pos >= 10 && pos <= 17) || (pos >= 20 && pos <= 27) || (pos >= 30 && pos <= 37) || (pos >= 40 && pos <= 47) || (pos >= 50 && pos <= 57) || (pos >= 60 && pos <= 67) || (pos >= 70 && pos <= 77)) && document.getElementById(pos.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(pos.toString()).attributes["highlight"].value = true;
            dot(pos.toString());
        }
    }
}
function right_cut_down_pawn(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let pos = parseInt(x) + 11;
    // LEFT BRANCH main white ko marne ke liye Dots in case of DOWN MOVE
    if (check_prev == 'black') {
        if (((pos >= 0 && pos <= 7) || (pos >= 10 && pos <= 17) || (pos >= 20 && pos <= 27) || (pos >= 30 && pos <= 37) || (pos >= 40 && pos <= 47) || (pos >= 50 && pos <= 57) || (pos >= 60 && pos <= 67) || (pos >= 70 && pos <= 77)) && document.getElementById(pos.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(pos.toString()).attributes["highlight"].value = true;
            dot(pos.toString());
        }
    } else if (check_prev == 'white') {
        if (((pos >= 0 && pos <= 7) || (pos >= 10 && pos <= 17) || (pos >= 20 && pos <= 27) || (pos >= 30 && pos <= 37) || (pos >= 40 && pos <= 47) || (pos >= 50 && pos <= 57) || (pos >= 60 && pos <= 67) || (pos >= 70 && pos <= 77)) && document.getElementById(pos.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(pos.toString()).attributes["highlight"].value = true;
            dot(pos.toString());
        }
    }
}
function right_cut_up_pawn(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let pos = parseInt(x) - 9;
    // LEFT BRANCH main white ko marne ke liye Dots in case of DOWN MOVE
    if (check_prev == 'black') {
        if (((pos >= 0 && pos <= 7) || (pos >= 10 && pos <= 17) || (pos >= 20 && pos <= 27) || (pos >= 30 && pos <= 37) || (pos >= 40 && pos <= 47) || (pos >= 50 && pos <= 57) || (pos >= 60 && pos <= 67) || (pos >= 70 && pos <= 77)) && document.getElementById(pos.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(pos.toString()).attributes["highlight"].value = true;
            dot(pos.toString());
        }
    } else if (check_prev == 'white') {
        if (((pos >= 0 && pos <= 7) || (pos >= 10 && pos <= 17) || (pos >= 20 && pos <= 27) || (pos >= 30 && pos <= 37) || (pos >= 40 && pos <= 47) || (pos >= 50 && pos <= 57) || (pos >= 60 && pos <= 67) || (pos >= 70 && pos <= 77)) && document.getElementById(pos.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(pos.toString()).attributes["highlight"].value = true;
            dot(pos.toString());
        }
    }
}
function vertical_up_two_pawn(x) {
    let up1 = parseInt(x) - 10;
    let up2 = up1 - 10;
    if (((up1 >= 0 && up1 <= 7) || (up1 >= 10 && up1 <= 17) || (up1 >= 20 && up1 <= 27) || (up1 >= 30 && up1 <= 37) || (up1 >= 40 && up1 <= 47) || (up1 >= 50 && up1 <= 57) || (up1 >= 60 && up1 <= 67) || (up1 >= 70 && up1 <= 77)) && document.getElementById(up1.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(up1.toString()).attributes["highlight"].value = true;
        dot(up1.toString());
        if (((up2 >= 0 && up2 <= 7) || (up2 >= 10 && up2 <= 17) || (up2 >= 20 && up2 <= 27) || (up2 >= 30 && up2 <= 37) || (up2 >= 40 && up2 <= 47) || (up2 >= 50 && up2 <= 57) || (up2 >= 60 && up2 <= 67) || (up2 >= 70 && up2 <= 77)) && document.getElementById(up2.toString()).childNodes[0].attributes.src.value == ' ') {
            document.getElementById(up2.toString()).attributes["highlight"].value = true;
            dot(up2.toString());
        }
    }
}
function vertical_down_two_pawn(x) {
    let up1 = parseInt(x) + 10;
    let up2 = up1 + 10;
    if (((up1 >= 0 && up1 <= 7) || (up1 >= 10 && up1 <= 17) || (up1 >= 20 && up1 <= 27) || (up1 >= 30 && up1 <= 37) || (up1 >= 40 && up1 <= 47) || (up1 >= 50 && up1 <= 57) || (up1 >= 60 && up1 <= 67) || (up1 >= 70 && up1 <= 77)) && document.getElementById(up1.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(up1.toString()).attributes["highlight"].value = true;
        dot(up1.toString());
        if (((up2 >= 0 && up2 <= 7) || (up2 >= 10 && up2 <= 17) || (up2 >= 20 && up2 <= 27) || (up2 >= 30 && up2 <= 37) || (up2 >= 40 && up2 <= 47) || (up2 >= 50 && up2 <= 57) || (up2 >= 60 && up2 <= 67) || (up2 >= 70 && up2 <= 77)) && document.getElementById(up2.toString()).childNodes[0].attributes.src.value == ' ') {
            document.getElementById(up2.toString()).attributes["highlight"].value = true;
            dot(up2.toString());
        }
    }
}
function blackPawnPromotion(x) {
    if (x >= 70 && x <= 77) {
        if (check(x) == "black pawn_1.png" || check(x) == "black pawn_2.png" || check(x) == "black pawn_3.png" || check(x) == "black pawn_4.png" || check(x) == "black pawn_5.png" || check(x) == "black pawn_6.png" || check(x) == "black pawn_7.png" || check(x) == "black pawn_8.png") {
            document.getElementById(x).innerHTML = `<img src = "black queen.png">`;
        }
    }
}
function whitePawnPromotion(x) {
    if (x >= 0 && x <= 7) {
        if (check(x) == "white pawn_1.png" || check(x) == "white pawn_2.png" || check(x) == "white pawn_3.png" || check(x) == "white pawn_4.png" || check(x) == "white pawn_5.png" || check(x) == "white pawn_6.png" || check(x) == "white pawn_7.png" || check(x) == "white pawn_8.png") {
            document.getElementById(x).innerHTML = `<img src = "white queen.png">`;
        }
    }
}
// VERTICAL DOTS Down Formation
function vertical_dot_formation_down(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5); // Means Goti kya Colour hain jo chala hain
    let a = parseInt(x) + 10;
    // VERTICAL DOTS Down making
    while (((a >= 0 && a <= 7) || (a >= 10 && a <= 17) || (a >= 20 && a <= 27) || (a >= 30 && a <= 37) || (a >= 40 && a <= 47) || (a >= 50 && a <= 57) || (a >= 60 && a <= 67) || (a >= 70 && a <= 77)) && document.getElementById(a.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(a.toString()).attributes["highlight"].value = true;
        dot(a.toString());
        a = a + 10; // a = 60
    }
    // Vertical DOWN wala white ko marne ke liye Dots formation
    if (check_prev == 'black') {
        if (((a >= 0 && a <= 7) || (a >= 10 && a <= 17) || (a >= 20 && a <= 27) || (a >= 30 && a <= 37) || (a >= 40 && a <= 47) || (a >= 50 && a <= 57) || (a >= 60 && a <= 67) || (a >= 70 && a <= 77)) && document.getElementById(a.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(a.toString()).attributes["highlight"].value = true;
            dot(a.toString());
        }
    } else if (check_prev == 'white') {
        if (((a >= 0 && a <= 7) || (a >= 10 && a <= 17) || (a >= 20 && a <= 27) || (a >= 30 && a <= 37) || (a >= 40 && a <= 47) || (a >= 50 && a <= 57) || (a >= 60 && a <= 67) || (a >= 70 && a <= 77)) && document.getElementById(a.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(a.toString()).attributes["highlight"].value = true;
            dot(a.toString());
        }
    }
}
function vertical_up_king(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5); // Means Goti kya Colour hain jo chala hain
    let a = parseInt(x) + 10;
    // VERTICAL DOTS Down making
    if (((a >= 0 && a <= 7) || (a >= 10 && a <= 17) || (a >= 20 && a <= 27) || (a >= 30 && a <= 37) || (a >= 40 && a <= 47) || (a >= 50 && a <= 57) || (a >= 60 && a <= 67) || (a >= 70 && a <= 77)) && document.getElementById(a.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(a.toString()).attributes["highlight"].value = true;
        king_pos.push(a);
        dot(a.toString());
        // a = a + 10; // a = 60
    }
    if (check_prev == 'black') {
        if (((a >= 0 && a <= 7) || (a >= 10 && a <= 17) || (a >= 20 && a <= 27) || (a >= 30 && a <= 37) || (a >= 40 && a <= 47) || (a >= 50 && a <= 57) || (a >= 60 && a <= 67) || (a >= 70 && a <= 77)) && document.getElementById(a.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(a.toString()).attributes["highlight"].value = true;
            king_pos.push(a);
            dot(a.toString());
        }
    } else if (check_prev == 'white') {
        if (((a >= 0 && a <= 7) || (a >= 10 && a <= 17) || (a >= 20 && a <= 27) || (a >= 30 && a <= 37) || (a >= 40 && a <= 47) || (a >= 50 && a <= 57) || (a >= 60 && a <= 67) || (a >= 70 && a <= 77)) && document.getElementById(a.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(a.toString()).attributes["highlight"].value = true;
            king_pos.push(a);
            dot(a.toString());
        }
    }
    // Vertical DOWN wala white ko marne ke liye Dots formation
}
// VERTICAL DOTS UP Foramtion
function vertical_dot_formation_up(x) {
    // VERTICAL DOTS UPS making
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let up = parseInt(x) - 10;
    while (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) && document.getElementById(up.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(up.toString()).attributes["highlight"].value = true;
        dot(up.toString());
        up = up - 10; // a = 60
    }
    // VERTICAL UP wala white ko marne ke liye  Dots formation
    if (check_prev == 'black') {
        if (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) && document.getElementById(up.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(up.toString()).attributes["highlight"].value = true;
            dot(up.toString());
        }
    } else if (check_prev = 'white') {
        if (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) && document.getElementById(up.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(up.toString()).attributes["highlight"].value = true;
            dot(up.toString());
        }
    }
}
function vertical_down_king(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let up = parseInt(x) - 10;
    if (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) && document.getElementById(up.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(up.toString()).attributes["highlight"].value = true;
        king_pos.push(up);
        dot(up.toString());
    }
    // VERTICAL UP wala white ko marne ke liye  Dots formation
    if (check_prev == 'black') {
        if (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) && document.getElementById(up.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(up.toString()).attributes["highlight"].value = true;
            king_pos.push(up);
            dot(up.toString());
        }
    } else if (check_prev = 'white') {
        if (((up >= 0 && up <= 7) || (up >= 10 && up <= 17) || (up >= 20 && up <= 27) || (up >= 30 && up <= 37) || (up >= 40 && up <= 47) || (up >= 50 && up <= 57) || (up >= 60 && up <= 67) || (up >= 70 && up <= 77)) && document.getElementById(up.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(up.toString()).attributes["highlight"].value = true;
            king_pos.push(up);
            dot(up.toString());
        }
    }
}
// HORIZONTAL RIGHT DOTS Foramtion
function horizonatal_right_dot_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let k = parseInt(x) + 1;
    // HORIZONTAL RIGHT DOTS making
    while (((k >= 0 && k <= 7) || (k >= 10 && k <= 17) || (k >= 20 && k <= 27) || (k >= 30 && k <= 37) || (k >= 40 && k <= 47) || (k >= 50 && k <= 57) || (k >= 60 && k <= 67) || (k >= 70 && k <= 77)) && document.getElementById(k.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(k.toString()).attributes["highlight"].value = true;
        dot(k.toString());
        k = k + 1;
    }
    // Horizontal right Katane ka for white
    if (check_prev == 'black') {
        if (((k >= 0 && k <= 7) || (k >= 10 && k <= 17) || (k >= 20 && k <= 27) || (k >= 30 && k <= 37) || (k >= 40 && k <= 47) || (k >= 50 && k <= 57) || (k >= 60 && k <= 67) || (k >= 70 && k <= 77)) && document.getElementById(k.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(k.toString()).attributes["highlight"].value = true;
            dot(k.toString());
        }
    } else if (check_prev == 'white') {
        if (((k >= 0 && k <= 7) || (k >= 10 && k <= 17) || (k >= 20 && k <= 27) || (k >= 30 && k <= 37) || (k >= 40 && k <= 47) || (k >= 50 && k <= 57) || (k >= 60 && k <= 67) || (k >= 70 && k <= 77)) && document.getElementById(k.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(k.toString()).attributes["highlight"].value = true;
            dot(k.toString());
        }
    }
}
function horizonatal_right_dot_king(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let k = parseInt(x) + 1;
    // HORIZONTAL RIGHT DOTS making
    if (((k >= 0 && k <= 7) || (k >= 10 && k <= 17) || (k >= 20 && k <= 27) || (k >= 30 && k <= 37) || (k >= 40 && k <= 47) || (k >= 50 && k <= 57) || (k >= 60 && k <= 67) || (k >= 70 && k <= 77)) && document.getElementById(k.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(k.toString()).attributes["highlight"].value = true;
        king_pos.push(k);
        dot(k.toString());
        // k = k + 1;
    }
    // Horizontal right Katane ka for white
    if (check_prev == 'black') {
        if (((k >= 0 && k <= 7) || (k >= 10 && k <= 17) || (k >= 20 && k <= 27) || (k >= 30 && k <= 37) || (k >= 40 && k <= 47) || (k >= 50 && k <= 57) || (k >= 60 && k <= 67) || (k >= 70 && k <= 77)) && document.getElementById(k.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(k.toString()).attributes["highlight"].value = true;
            king_pos.push(k);
            dot(k.toString());
        }
    } else if (check_prev == 'white') {
        if (((k >= 0 && k <= 7) || (k >= 10 && k <= 17) || (k >= 20 && k <= 27) || (k >= 30 && k <= 37) || (k >= 40 && k <= 47) || (k >= 50 && k <= 57) || (k >= 60 && k <= 67) || (k >= 70 && k <= 77)) && document.getElementById(k.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(k.toString()).attributes["highlight"].value = true;
            king_pos.push(k);
            dot(k.toString());
        }
    }
}
// HORIZONTAL LEFT DOTS Formation
function horizonatal_left_dot_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let b = parseInt(x) - 1;
    // HORIZONTAL LEFT DOTS
    while (((b >= 0 && b <= 7) || (b >= 10 && b <= 17) || (b >= 20 && b <= 27) || (b >= 30 && b <= 37) || (b >= 40 && b <= 47) || (b >= 50 && b <= 57) || (b >= 60 && b <= 67) || (b >= 70 && b <= 77)) && document.getElementById(b.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(b.toString()).attributes["highlight"].value = true;
        dot(b.toString());
        b = b - 1;
    }
    if (check_prev == 'black') {
        // Horizontal left katane ka for white
        if (((b >= 0 && b <= 7) || (b >= 10 && b <= 17) || (b >= 20 && b <= 27) || (b >= 30 && b <= 37) || (b >= 40 && b <= 47) || (b >= 50 && b <= 57) || (b >= 60 && b <= 67) || (b >= 70 && b <= 77)) && document.getElementById(b.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(b.toString()).attributes["highlight"].value = true;
            dot(b.toString());
        }
    } else if (check_prev == 'white') {
        if (((b >= 0 && b <= 7) || (b >= 10 && b <= 17) || (b >= 20 && b <= 27) || (b >= 30 && b <= 37) || (b >= 40 && b <= 47) || (b >= 50 && b <= 57) || (b >= 60 && b <= 67) || (b >= 70 && b <= 77)) && document.getElementById(b.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(b.toString()).attributes["highlight"].value = true;
            dot(b.toString());
        }
    }
}
function horizontal_left_dot_king(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let b = parseInt(x) - 1;
    // HORIZONTAL LEFT DOTS
    if (((b >= 0 && b <= 7) || (b >= 10 && b <= 17) || (b >= 20 && b <= 27) || (b >= 30 && b <= 37) || (b >= 40 && b <= 47) || (b >= 50 && b <= 57) || (b >= 60 && b <= 67) || (b >= 70 && b <= 77)) && document.getElementById(b.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(b.toString()).attributes["highlight"].value = true;
        king_pos.push(b);
        dot(b.toString());
    }
    if (check_prev == 'black') {
        // Horizontal left katane ka for white
        if (((b >= 0 && b <= 7) || (b >= 10 && b <= 17) || (b >= 20 && b <= 27) || (b >= 30 && b <= 37) || (b >= 40 && b <= 47) || (b >= 50 && b <= 57) || (b >= 60 && b <= 67) || (b >= 70 && b <= 77)) && document.getElementById(b.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(b.toString()).attributes["highlight"].value = true;
            king_pos.push(b);
            dot(b.toString());
        }
    } else if (check_prev == 'white') {
        if (((b >= 0 && b <= 7) || (b >= 10 && b <= 17) || (b >= 20 && b <= 27) || (b >= 30 && b <= 37) || (b >= 40 && b <= 47) || (b >= 50 && b <= 57) || (b >= 60 && b <= 67) || (b >= 70 && b <= 77)) && document.getElementById(b.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(b.toString()).attributes["highlight"].value = true;
            king_pos.push(b);
            dot(b.toString());
        }
    }
}
// (+9) for LEFT BRANCH DOWN Dots Formation  
function left_branch_down_dot_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let left_branch_down = parseInt(x) + 9;
    while (((left_branch_down >= 0 && left_branch_down <= 7) || (left_branch_down >= 10 && left_branch_down <= 17) || (left_branch_down >= 20 && left_branch_down <= 27) || (left_branch_down >= 30 && left_branch_down <= 37) || (left_branch_down >= 40 && left_branch_down <= 47) || (left_branch_down >= 50 && left_branch_down <= 57) || (left_branch_down >= 60 && left_branch_down <= 67) || (left_branch_down >= 70 && left_branch_down <= 77)) && document.getElementById(left_branch_down.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(left_branch_down.toString()).attributes["highlight"].value = true;
        dot(left_branch_down.toString());
        left_branch_down = left_branch_down + 9;
    }
    // LEFT BRANCH main white ko marne ke liye Dots in case of DOWN MOVE
    if (check_prev == 'black') {
        if (((left_branch_down >= 0 && left_branch_down <= 7) || (left_branch_down >= 10 && left_branch_down <= 17) || (left_branch_down >= 20 && left_branch_down <= 27) || (left_branch_down >= 30 && left_branch_down <= 37) || (left_branch_down >= 40 && left_branch_down <= 47) || (left_branch_down >= 50 && left_branch_down <= 57) || (left_branch_down >= 60 && left_branch_down <= 67) || (left_branch_down >= 70 && left_branch_down <= 77)) && document.getElementById(left_branch_down.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(left_branch_down.toString()).attributes["highlight"].value = true;
            dot(left_branch_down.toString());
        }
    } else if (check_prev == 'white') {
        if (((left_branch_down >= 0 && left_branch_down <= 7) || (left_branch_down >= 10 && left_branch_down <= 17) || (left_branch_down >= 20 && left_branch_down <= 27) || (left_branch_down >= 30 && left_branch_down <= 37) || (left_branch_down >= 40 && left_branch_down <= 47) || (left_branch_down >= 50 && left_branch_down <= 57) || (left_branch_down >= 60 && left_branch_down <= 67) || (left_branch_down >= 70 && left_branch_down <= 77)) && document.getElementById(left_branch_down.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(left_branch_down.toString()).attributes["highlight"].value = true;
            dot(left_branch_down.toString());
        }
    }
}
function left_branch_down_king(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let left_branch_down = parseInt(x) + 9;
    if (((left_branch_down >= 0 && left_branch_down <= 7) || (left_branch_down >= 10 && left_branch_down <= 17) || (left_branch_down >= 20 && left_branch_down <= 27) || (left_branch_down >= 30 && left_branch_down <= 37) || (left_branch_down >= 40 && left_branch_down <= 47) || (left_branch_down >= 50 && left_branch_down <= 57) || (left_branch_down >= 60 && left_branch_down <= 67) || (left_branch_down >= 70 && left_branch_down <= 77)) && document.getElementById(left_branch_down.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(left_branch_down.toString()).attributes["highlight"].value = true;
        king_pos.push(left_branch_down);
        dot(left_branch_down.toString());
    }
    // LEFT BRANCH main white ko marne ke liye Dots in case of DOWN MOVE
    if (check_prev == 'black') {
        if (((left_branch_down >= 0 && left_branch_down <= 7) || (left_branch_down >= 10 && left_branch_down <= 17) || (left_branch_down >= 20 && left_branch_down <= 27) || (left_branch_down >= 30 && left_branch_down <= 37) || (left_branch_down >= 40 && left_branch_down <= 47) || (left_branch_down >= 50 && left_branch_down <= 57) || (left_branch_down >= 60 && left_branch_down <= 67) || (left_branch_down >= 70 && left_branch_down <= 77)) && document.getElementById(left_branch_down.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(left_branch_down.toString()).attributes["highlight"].value = true;
            king_pos.push(left_branch_down);
            dot(left_branch_down.toString());
        }
    } else if (check_prev == 'white') {
        if (((left_branch_down >= 0 && left_branch_down <= 7) || (left_branch_down >= 10 && left_branch_down <= 17) || (left_branch_down >= 20 && left_branch_down <= 27) || (left_branch_down >= 30 && left_branch_down <= 37) || (left_branch_down >= 40 && left_branch_down <= 47) || (left_branch_down >= 50 && left_branch_down <= 57) || (left_branch_down >= 60 && left_branch_down <= 67) || (left_branch_down >= 70 && left_branch_down <= 77)) && document.getElementById(left_branch_down.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(left_branch_down.toString()).attributes["highlight"].value = true;
            king_pos.push(left_branch_down);
            dot(left_branch_down.toString());
        }
    }
}
function left_branch_up_king(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let Left_branch_up = parseInt(x) - 11;
    if (((Left_branch_up >= 0 && Left_branch_up <= 7) || (Left_branch_up >= 10 && Left_branch_up <= 17) || (Left_branch_up >= 20 && Left_branch_up <= 27) || (Left_branch_up >= 30 && Left_branch_up <= 37) || (Left_branch_up >= 40 && Left_branch_up <= 47) || (Left_branch_up >= 50 && Left_branch_up <= 57) || (Left_branch_up >= 60 && Left_branch_up <= 67) || (Left_branch_up >= 70 && Left_branch_up <= 77)) && document.getElementById(Left_branch_up.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(Left_branch_up.toString()).attributes["highlight"].value = true;
        king_pos.push(Left_branch_up);
        dot(Left_branch_up.toString());
    }
    // LEFT Branch main white ko marne ke liye Dots for UP MOVE For Left Side
    if (check_prev == 'black') {
        if (((Left_branch_up >= 0 && Left_branch_up <= 7) || (Left_branch_up >= 10 && Left_branch_up <= 17) || (Left_branch_up >= 20 && Left_branch_up <= 27) || (Left_branch_up >= 30 && Left_branch_up <= 37) || (Left_branch_up >= 40 && Left_branch_up <= 47) || (Left_branch_up >= 50 && Left_branch_up <= 57) || (Left_branch_up >= 60 && Left_branch_up <= 67) || (Left_branch_up >= 70 && Left_branch_up <= 77)) && document.getElementById(Left_branch_up.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(Left_branch_up.toString()).attributes["highlight"].value = true;
            king_pos.push(Left_branch_up);
            dot(Left_branch_up.toString());
        }
    } else if (check_prev == 'white') {
        if (((Left_branch_up >= 0 && Left_branch_up <= 7) || (Left_branch_up >= 10 && Left_branch_up <= 17) || (Left_branch_up >= 20 && Left_branch_up <= 27) || (Left_branch_up >= 30 && Left_branch_up <= 37) || (Left_branch_up >= 40 && Left_branch_up <= 47) || (Left_branch_up >= 50 && Left_branch_up <= 57) || (Left_branch_up >= 60 && Left_branch_up <= 67) || (Left_branch_up >= 70 && Left_branch_up <= 77)) && document.getElementById(Left_branch_up.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(Left_branch_up.toString()).attributes["highlight"].value = true;
            king_pos.push(Left_branch_up);
            dot(Left_branch_up.toString());
        }
    }
}
// (+11) 
// For RIGHT BRANCH DOWN DOT Formation
function right_branch_down_dot_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let Right_branch_down = parseInt(x) + 11;
    while (((Right_branch_down >= 0 && Right_branch_down <= 7) || (Right_branch_down >= 10 && Right_branch_down <= 17) || (Right_branch_down >= 20 && Right_branch_down <= 27) || (Right_branch_down >= 30 && Right_branch_down <= 37) || (Right_branch_down >= 40 && Right_branch_down <= 47) || (Right_branch_down >= 50 && Right_branch_down <= 57) || (Right_branch_down >= 60 && Right_branch_down <= 67) || (Right_branch_down >= 70 && Right_branch_down <= 77)) && document.getElementById(Right_branch_down.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(Right_branch_down.toString()).attributes["highlight"].value = true;
        dot(Right_branch_down.toString());
        Right_branch_down = Right_branch_down + 11;
    }
    if (check_prev == 'black') {
        // RIGHT BRANCH main white ko marne ke liye Dots in case of DOWN MOVE
        if (((Right_branch_down >= 0 && Right_branch_down <= 7) || (Right_branch_down >= 10 && Right_branch_down <= 17) || (Right_branch_down >= 20 && Right_branch_down <= 27) || (Right_branch_down >= 30 && Right_branch_down <= 37) || (Right_branch_down >= 40 && Right_branch_down <= 47) || (Right_branch_down >= 50 && Right_branch_down <= 57) || (Right_branch_down >= 60 && Right_branch_down <= 67) || (Right_branch_down >= 70 && Right_branch_down <= 77)) && document.getElementById(Right_branch_down.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(Right_branch_down.toString()).attributes["highlight"].value = true;
            dot(Right_branch_down.toString());
        }
    } else if (check_prev == 'white') {
        if (((Right_branch_down >= 0 && Right_branch_down <= 7) || (Right_branch_down >= 10 && Right_branch_down <= 17) || (Right_branch_down >= 20 && Right_branch_down <= 27) || (Right_branch_down >= 30 && Right_branch_down <= 37) || (Right_branch_down >= 40 && Right_branch_down <= 47) || (Right_branch_down >= 50 && Right_branch_down <= 57) || (Right_branch_down >= 60 && Right_branch_down <= 67) || (Right_branch_down >= 70 && Right_branch_down <= 77)) && document.getElementById(Right_branch_down.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(Right_branch_down.toString()).attributes["highlight"].value = true;
            dot(Right_branch_down.toString());
        }
    }
}
function right_branch_down_king(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let Right_branch_down = parseInt(x) + 11;
    if (((Right_branch_down >= 0 && Right_branch_down <= 7) || (Right_branch_down >= 10 && Right_branch_down <= 17) || (Right_branch_down >= 20 && Right_branch_down <= 27) || (Right_branch_down >= 30 && Right_branch_down <= 37) || (Right_branch_down >= 40 && Right_branch_down <= 47) || (Right_branch_down >= 50 && Right_branch_down <= 57) || (Right_branch_down >= 60 && Right_branch_down <= 67) || (Right_branch_down >= 70 && Right_branch_down <= 77)) && document.getElementById(Right_branch_down.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(Right_branch_down.toString()).attributes["highlight"].value = true;
        king_pos.push(Right_branch_down);
        dot(Right_branch_down.toString());
    }
    if (check_prev == 'black') {
        // RIGHT BRANCH main white ko marne ke liye Dots in case of DOWN MOVE
        if (((Right_branch_down >= 0 && Right_branch_down <= 7) || (Right_branch_down >= 10 && Right_branch_down <= 17) || (Right_branch_down >= 20 && Right_branch_down <= 27) || (Right_branch_down >= 30 && Right_branch_down <= 37) || (Right_branch_down >= 40 && Right_branch_down <= 47) || (Right_branch_down >= 50 && Right_branch_down <= 57) || (Right_branch_down >= 60 && Right_branch_down <= 67) || (Right_branch_down >= 70 && Right_branch_down <= 77)) && document.getElementById(Right_branch_down.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(Right_branch_down.toString()).attributes["highlight"].value = true;
            king_pos.push(Right_branch_down);
            dot(Right_branch_down.toString());
        }
    } else if (check_prev == 'white') {
        if (((Right_branch_down >= 0 && Right_branch_down <= 7) || (Right_branch_down >= 10 && Right_branch_down <= 17) || (Right_branch_down >= 20 && Right_branch_down <= 27) || (Right_branch_down >= 30 && Right_branch_down <= 37) || (Right_branch_down >= 40 && Right_branch_down <= 47) || (Right_branch_down >= 50 && Right_branch_down <= 57) || (Right_branch_down >= 60 && Right_branch_down <= 67) || (Right_branch_down >= 70 && Right_branch_down <= 77)) && document.getElementById(Right_branch_down.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(Right_branch_down.toString()).attributes["highlight"].value = true;
            king_pos.push(Right_branch_down);
            dot(Right_branch_down.toString());
        }
    }
}
function right_branch_up_king(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let Right_branch_up = parseInt(x) - 9;
    if (((Right_branch_up >= 0 && Right_branch_up <= 7) || (Right_branch_up >= 10 && Right_branch_up <= 17) || (Right_branch_up >= 20 && Right_branch_up <= 27) || (Right_branch_up >= 30 && Right_branch_up <= 37) || (Right_branch_up >= 40 && Right_branch_up <= 47) || (Right_branch_up >= 50 && Right_branch_up <= 57) || (Right_branch_up >= 60 && Right_branch_up <= 67) || (Right_branch_up >= 70 && Right_branch_up <= 77)) && document.getElementById(Right_branch_up.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(Right_branch_up.toString()).attributes["highlight"].value = true;
        king_pos.push(Right_branch_up);
        dot(Right_branch_up.toString());
    }
    // Right Branch main white wale ko marne ke liye Dots for UP MOVE For Right side
    if (check_prev == 'black') {
        if (((Right_branch_up >= 0 && Right_branch_up <= 7) || (Right_branch_up >= 10 && Right_branch_up <= 17) || (Right_branch_up >= 20 && Right_branch_up <= 27) || (Right_branch_up >= 30 && Right_branch_up <= 37) || (Right_branch_up >= 40 && Right_branch_up <= 47) || (Right_branch_up >= 50 && Right_branch_up <= 57) || (Right_branch_up >= 60 && Right_branch_up <= 67) || (Right_branch_up >= 70 && Right_branch_up <= 77)) && document.getElementById(Right_branch_up.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(Right_branch_up.toString()).attributes["highlight"].value = true;
            king_pos.push(Right_branch_up);
            dot(Right_branch_up.toString());
        }
    } else if (check_prev == 'white') {
        if (((Right_branch_up >= 0 && Right_branch_up <= 7) || (Right_branch_up >= 10 && Right_branch_up <= 17) || (Right_branch_up >= 20 && Right_branch_up <= 27) || (Right_branch_up >= 30 && Right_branch_up <= 37) || (Right_branch_up >= 40 && Right_branch_up <= 47) || (Right_branch_up >= 50 && Right_branch_up <= 57) || (Right_branch_up >= 60 && Right_branch_up <= 67) || (Right_branch_up >= 70 && Right_branch_up <= 77)) && document.getElementById(Right_branch_up.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(Right_branch_up.toString()).attributes["highlight"].value = true;
            king_pos.push(Right_branch_up);
            dot(Right_branch_up.toString());
        }
    }
}
// (-9)
//  for RIGHT BRANCH UP Dots Formation 
function right_branch_up_dot_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let Right_branch_up = parseInt(x) - 9;
    while (((Right_branch_up >= 0 && Right_branch_up <= 7) || (Right_branch_up >= 10 && Right_branch_up <= 17) || (Right_branch_up >= 20 && Right_branch_up <= 27) || (Right_branch_up >= 30 && Right_branch_up <= 37) || (Right_branch_up >= 40 && Right_branch_up <= 47) || (Right_branch_up >= 50 && Right_branch_up <= 57) || (Right_branch_up >= 60 && Right_branch_up <= 67) || (Right_branch_up >= 70 && Right_branch_up <= 77)) && document.getElementById(Right_branch_up.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(Right_branch_up.toString()).attributes["highlight"].value = true;
        dot(Right_branch_up.toString());
        Right_branch_up = Right_branch_up - 9;
    }
    // Right Branch main white wale ko marne ke liye Dots for UP MOVE For Right side
    if (check_prev == 'black') {
        if (((Right_branch_up >= 0 && Right_branch_up <= 7) || (Right_branch_up >= 10 && Right_branch_up <= 17) || (Right_branch_up >= 20 && Right_branch_up <= 27) || (Right_branch_up >= 30 && Right_branch_up <= 37) || (Right_branch_up >= 40 && Right_branch_up <= 47) || (Right_branch_up >= 50 && Right_branch_up <= 57) || (Right_branch_up >= 60 && Right_branch_up <= 67) || (Right_branch_up >= 70 && Right_branch_up <= 77)) && document.getElementById(Right_branch_up.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(Right_branch_up.toString()).attributes["highlight"].value = true;
            dot(Right_branch_up.toString());
        }
    } else if (check_prev == 'white') {
        if (((Right_branch_up >= 0 && Right_branch_up <= 7) || (Right_branch_up >= 10 && Right_branch_up <= 17) || (Right_branch_up >= 20 && Right_branch_up <= 27) || (Right_branch_up >= 30 && Right_branch_up <= 37) || (Right_branch_up >= 40 && Right_branch_up <= 47) || (Right_branch_up >= 50 && Right_branch_up <= 57) || (Right_branch_up >= 60 && Right_branch_up <= 67) || (Right_branch_up >= 70 && Right_branch_up <= 77)) && document.getElementById(Right_branch_up.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(Right_branch_up.toString()).attributes["highlight"].value = true;
            dot(Right_branch_up.toString());
        }
    }
}
// (-11)
// FOR LEFT BRANCH UP DOTS FORMATION
function left_branch_up_dot_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let Left_branch_up = parseInt(x) - 11;
    while (((Left_branch_up >= 0 && Left_branch_up <= 7) || (Left_branch_up >= 10 && Left_branch_up <= 17) || (Left_branch_up >= 20 && Left_branch_up <= 27) || (Left_branch_up >= 30 && Left_branch_up <= 37) || (Left_branch_up >= 40 && Left_branch_up <= 47) || (Left_branch_up >= 50 && Left_branch_up <= 57) || (Left_branch_up >= 60 && Left_branch_up <= 67) || (Left_branch_up >= 70 && Left_branch_up <= 77)) && document.getElementById(Left_branch_up.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(Left_branch_up.toString()).attributes["highlight"].value = true;
        dot(Left_branch_up.toString());
        Left_branch_up = Left_branch_up - 11;
    }
    // LEFT Branch main white ko marne ke liye Dots for UP MOVE For Left Side
    if (check_prev == 'black') {
        if (((Left_branch_up >= 0 && Left_branch_up <= 7) || (Left_branch_up >= 10 && Left_branch_up <= 17) || (Left_branch_up >= 20 && Left_branch_up <= 27) || (Left_branch_up >= 30 && Left_branch_up <= 37) || (Left_branch_up >= 40 && Left_branch_up <= 47) || (Left_branch_up >= 50 && Left_branch_up <= 57) || (Left_branch_up >= 60 && Left_branch_up <= 67) || (Left_branch_up >= 70 && Left_branch_up <= 77)) && document.getElementById(Left_branch_up.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(Left_branch_up.toString()).attributes["highlight"].value = true;
            dot(Left_branch_up.toString());
        }
    } else if (check_prev == 'white') {
        if (((Left_branch_up >= 0 && Left_branch_up <= 7) || (Left_branch_up >= 10 && Left_branch_up <= 17) || (Left_branch_up >= 20 && Left_branch_up <= 27) || (Left_branch_up >= 30 && Left_branch_up <= 37) || (Left_branch_up >= 40 && Left_branch_up <= 47) || (Left_branch_up >= 50 && Left_branch_up <= 57) || (Left_branch_up >= 60 && Left_branch_up <= 67) || (Left_branch_up >= 70 && Left_branch_up <= 77)) && document.getElementById(Left_branch_up.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(Left_branch_up.toString()).attributes["highlight"].value = true;
            dot(Left_branch_up.toString());
        }
    }
}
// left L shape Dot formation
function Vertical_left_L_shape_down_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let Left_l_shape = parseInt(x) + 19;
    if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
        dot(Left_l_shape.toString());
    }
    // LEFT Branch main white ko marne ke liye Dots for UP MOVE For Left Side
    if (check_prev == 'black') {
        if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
            dot(Left_l_shape.toString());
        }
    } else if (check_prev == 'white') {
        if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
            dot(Left_l_shape.toString());
        }
    }
}
function horizontal_left_L_shape_down_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let Left_l_shape = parseInt(x) + 8;
    if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
        dot(Left_l_shape.toString());
    }
    // LEFT Branch main white ko marne ke liye Dots for Horizontal down MOVE For Left Side
    if (check_prev == 'black') {
        if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
            dot(Left_l_shape.toString());
        }
    } else if (check_prev == 'white') {
        if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
            dot(Left_l_shape.toString());
        }
    }
}
function Vertical_left_L_shape_up_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let Left_l_shape = parseInt(x) - 19;
    if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
        dot(Left_l_shape.toString());
    }
    // LEFT Branch main white ko marne ke liye Dots for UP MOVE For Left Side
    if (check_prev == 'black') {
        if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
            dot(Left_l_shape.toString());
        }
    } else if (check_prev == 'white') {
        if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
            dot(Left_l_shape.toString());
        }
    }
}
function horizontal_left_L_shape_up_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let Left_l_shape = parseInt(x) - 12;
    if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
        dot(Left_l_shape.toString());
    }
    // LEFT Branch main white ko marne ke liye Dots for Horizontal down MOVE For Left Side
    if (check_prev == 'black') {
        if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
            dot(Left_l_shape.toString());
        }
    } else if (check_prev == 'white') {
        if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
            dot(Left_l_shape.toString());
        }
    }
}
// Right L shape Dots formation
function Vertical_right_L_shape_down_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let right_l_shape = parseInt(x) + 21;
    if (((right_l_shape >= 0 && right_l_shape <= 7) || (right_l_shape >= 10 && right_l_shape <= 17) || (right_l_shape >= 20 && right_l_shape <= 27) || (right_l_shape >= 30 && right_l_shape <= 37) || (right_l_shape >= 40 && right_l_shape <= 47) || (right_l_shape >= 50 && right_l_shape <= 57) || (right_l_shape >= 60 && right_l_shape <= 67) || (right_l_shape >= 70 && right_l_shape <= 77)) && document.getElementById(right_l_shape.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(right_l_shape.toString()).attributes["highlight"].value = true;
        dot(right_l_shape.toString());
    }
    // LEFT Branch main white ko marne ke liye Dots for UP MOVE For Left Side
    if (check_prev == 'black') {
        if (((right_l_shape >= 0 && right_l_shape <= 7) || (right_l_shape >= 10 && right_l_shape <= 17) || (right_l_shape >= 20 && right_l_shape <= 27) || (right_l_shape >= 30 && right_l_shape <= 37) || (right_l_shape >= 40 && right_l_shape <= 47) || (right_l_shape >= 50 && right_l_shape <= 57) || (right_l_shape >= 60 && right_l_shape <= 67) || (right_l_shape >= 70 && right_l_shape <= 77)) && document.getElementById(right_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(right_l_shape.toString()).attributes["highlight"].value = true;
            dot(right_l_shape.toString());
        }
    } else if (check_prev == 'white') {
        if (((right_l_shape >= 0 && right_l_shape <= 7) || (right_l_shape >= 10 && right_l_shape <= 17) || (right_l_shape >= 20 && right_l_shape <= 27) || (right_l_shape >= 30 && right_l_shape <= 37) || (right_l_shape >= 40 && right_l_shape <= 47) || (right_l_shape >= 50 && right_l_shape <= 57) || (right_l_shape >= 60 && right_l_shape <= 67) || (right_l_shape >= 70 && right_l_shape <= 77)) && document.getElementById(right_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(right_l_shape.toString()).attributes["highlight"].value = true;
            dot(right_l_shape.toString());
        }
    }
}
function horizontal_right_L_shape_down_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let Left_l_shape = parseInt(x) + 12;
    if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
        dot(Left_l_shape.toString());
    }
    // LEFT Branch main white ko marne ke liye Dots for Horizontal down MOVE For Left Side
    if (check_prev == 'black') {
        if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
            dot(Left_l_shape.toString());
        }
    } else if (check_prev == 'white') {
        if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
            dot(Left_l_shape.toString());
        }
    }
}
function Vertical_right_L_shape_up_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let right_l_shape = parseInt(x) - 21;
    if (((right_l_shape >= 0 && right_l_shape <= 7) || (right_l_shape >= 10 && right_l_shape <= 17) || (right_l_shape >= 20 && right_l_shape <= 27) || (right_l_shape >= 30 && right_l_shape <= 37) || (right_l_shape >= 40 && right_l_shape <= 47) || (right_l_shape >= 50 && right_l_shape <= 57) || (right_l_shape >= 60 && right_l_shape <= 67) || (right_l_shape >= 70 && right_l_shape <= 77)) && document.getElementById(right_l_shape.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(right_l_shape.toString()).attributes["highlight"].value = true;
        dot(right_l_shape.toString());
    }
    // LEFT Branch main white ko marne ke liye Dots for UP MOVE For Left Side
    if (check_prev == 'black') {
        if (((right_l_shape >= 0 && right_l_shape <= 7) || (right_l_shape >= 10 && right_l_shape <= 17) || (right_l_shape >= 20 && right_l_shape <= 27) || (right_l_shape >= 30 && right_l_shape <= 37) || (right_l_shape >= 40 && right_l_shape <= 47) || (right_l_shape >= 50 && right_l_shape <= 57) || (right_l_shape >= 60 && right_l_shape <= 67) || (right_l_shape >= 70 && right_l_shape <= 77)) && document.getElementById(right_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(right_l_shape.toString()).attributes["highlight"].value = true;
            dot(right_l_shape.toString());
        }
    } else if (check_prev == 'white') {
        if (((right_l_shape >= 0 && right_l_shape <= 7) || (right_l_shape >= 10 && right_l_shape <= 17) || (right_l_shape >= 20 && right_l_shape <= 27) || (right_l_shape >= 30 && right_l_shape <= 37) || (right_l_shape >= 40 && right_l_shape <= 47) || (right_l_shape >= 50 && right_l_shape <= 57) || (right_l_shape >= 60 && right_l_shape <= 67) || (right_l_shape >= 70 && right_l_shape <= 77)) && document.getElementById(right_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(right_l_shape.toString()).attributes["highlight"].value = true;
            dot(right_l_shape.toString());
        }
    }
}
function horizontal_right_L_shape_up_formation(x) {
    let check_prev = document.getElementById(x).childNodes[0].attributes.src.value.slice(0, 5);
    let Left_l_shape = parseInt(x) - 8;
    if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value == ' ') {
        document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
        dot(Left_l_shape.toString());
    }
    // LEFT Branch main white ko marne ke liye Dots for Horizontal down MOVE For Left Side
    if (check_prev == 'black') {
        if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'white') {
            document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
            dot(Left_l_shape.toString());
        }
    } else if (check_prev == 'white') {
        if (((Left_l_shape >= 0 && Left_l_shape <= 7) || (Left_l_shape >= 10 && Left_l_shape <= 17) || (Left_l_shape >= 20 && Left_l_shape <= 27) || (Left_l_shape >= 30 && Left_l_shape <= 37) || (Left_l_shape >= 40 && Left_l_shape <= 47) || (Left_l_shape >= 50 && Left_l_shape <= 57) || (Left_l_shape >= 60 && Left_l_shape <= 67) || (Left_l_shape >= 70 && Left_l_shape <= 77)) && document.getElementById(Left_l_shape.toString()).childNodes[0].attributes.src.value.slice(0, 5) == 'black') {
            document.getElementById(Left_l_shape.toString()).attributes["highlight"].value = true;
            dot(Left_l_shape.toString());
        }
    }
}
function rook(x) {
    removePrevDot();
    vertical_dot_formation_down(x);
    vertical_dot_formation_up(x);
    horizonatal_right_dot_formation(x);
    horizonatal_left_dot_formation(x);
}
function bishop(x) {
    removePrevDot();
    left_branch_down_dot_formation(x);
    right_branch_down_dot_formation(x);
    left_branch_up_dot_formation(x);
    right_branch_up_dot_formation(x);
}
function queen(x) {
    removePrevDot();
    vertical_dot_formation_down(x);
    vertical_dot_formation_up(x);
    horizonatal_right_dot_formation(x);
    horizonatal_left_dot_formation(x);
    // Diagonally 
    left_branch_down_dot_formation(x);
    right_branch_down_dot_formation(x);
    left_branch_up_dot_formation(x);
    right_branch_up_dot_formation(x);
}
function knight(x) {
    removePrevDot();
    // Vertical
    Vertical_left_L_shape_down_formation(x);
    Vertical_right_L_shape_down_formation(x);
    Vertical_left_L_shape_up_formation(x);
    Vertical_right_L_shape_up_formation(x);
    // horizontal
    horizontal_left_L_shape_down_formation(x);
    horizontal_left_L_shape_up_formation(x);
    horizontal_right_L_shape_down_formation(x);
    horizontal_right_L_shape_up_formation(x);
}
function king(x) {
    removePrevDot();
    king_pos = [];
    vertical_down_king(x);
    vertical_up_king(x);
    horizontal_left_dot_king(x);
    horizonatal_right_dot_king(x);
    left_branch_up_king(x);
    left_branch_down_king(x);
    right_branch_up_king(x);
    right_branch_down_king(x);
}
function white_pawn(x) {
    removePrevDot();
    if (x >= 60 && x <= 67) {
        vertical_up_two_pawn(x);
    } else {
        vertical_up_pawn(x);
    }
    left_cut_up_pawn(x);
    right_cut_up_pawn(x);
}
function black_pawn(x) {
    removePrevDot();
    if (x >= 10 && x <= 17) {
        vertical_down_two_pawn(x);
    } else { vertical_down_pawn(x) }
    left_cut_down_pawn(x);
    right_cut_down_pawn(x);
}