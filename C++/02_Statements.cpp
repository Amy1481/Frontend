//If else statements
#include<bits/stdc++.h> 
using namespace std; 

//Write a program thattakes an input of age
//And prints if are an adult or not let >= 18 yes and <18 no
int main(){
    int age;
    cin >> age;
    if(age>=18){
        cout << "You're an adult";
    }
    else if(age<18){
        cout << "You aren't an adult";
    }
    return 0;
}
#include<bits/stdc++.h> 
using namespace std; 

int main(){
    int marks;
    cin >> marks;
    if(marks<25){
        cout << "F";
    }
    else if(marks >= 25 && marks <=44){
       cout <<  "E";
    }
    else if(marks >= 45 && marks <=49){
        cout <<  "D";
    }
    else if(marks >= 50 && marks <=59){
        cout <<  "C";
    }
    else if(marks >= 60 && marks <=79){
        cout <<  "B";
    }
    else{
        cout <<  "A";
    }
    return 0;
}

//Switch statements
#include<bits/stdc++.h> 
using namespace std; 

int main(){
    int day;
    cin >> day;

    switch(day){
        case 1:
          cout << "Mon";
          break;
        case 2:
          cout << "Tue";
          break;
        case 3:
          cout << "Wed";
          break;
        case 4:
          cout << "Thu";
          break;
        case 5:
          cout << "Fri";
          break;
        case 6:
          cout << "Sat";
          break;
        case 7:
          cout << "Sun";
          break;
        default:
         cout << "Invalid";
    }
    cout << "check";
    return 0;
}

//Arrays and Strings
#include<bits/stdc++.h> 
using namespace std; 

int main(){
    int a,b,c,d;
    cin >> a >> b >> c >> d;

    //or we can write
    //1D Array int arr[x]  [0][1][2][3][4] 5 index
    int arr[5];
    cin >> arr[0] >> arr[1] >> arr[2] >> arr[3] >> arr[4];

    cout << arr[3];

    //2D Array int arr[x][y]   5 index but 3 times i.e 3 is row number and 5 is column number
    //  index->  0 1 2 3 4
    //        0 [][][][][]
    //        1 [][][][][]
    //        2 [][][][][]
    int ar[3][5];

    ar[1][3]=34;
    cout << ar[1][3];
    
    // String
    string s="Steve";
    int length=s.size();
    cout << s[length-1];
    cout << s[0]; //Gives S as output


    //Loops
    // cout << "Steve" << endl; 
    // print it 500 times so we use loop
    for(int i=1;i<=5;i++){      //initializatin i=1 moves to condition i<=5 yes then prints the statement then goes back to it and does increment upto i<=5
      cout << "Steve" << endl;
    }


    // While loop
    int i;
    while(i<=5){
      cout << "Steve" << i << endl;
      i++;
    }

    // do while loop
    int i=2;
    do{
      cout << "Steve" << endl;
      i++;
    }while(i<=1);


  return 0;
}