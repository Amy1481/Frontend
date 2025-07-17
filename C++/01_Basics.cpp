#include<bits/stdc++.h> //Includes all the libraries
#include<iostream> //This iostream library helps us to give an output when we put an input
//#include<math.h> //Explains about maths problrems
//#include<string> 
using namespace std; //using this the program automatically uses  std infront of the function

int main(){
    // std::cout << "Hey string" << "\n" << "Hey Raj" <<std::endl; //cout means its a function that gives ouput and asking std to give output to the given input and \n and std::endl are equal as they taake us to next line
    // std::cout << "Hey string";
    // cout << "Hey string" << "\n" << "Hey Raj" << endl; //cout means its a function that gives ouput and asking std to give output to the given input and \n and std::endl are equal as they taake us to next line
    // cout << "Hey string";
    int x,y;
    cin >> x >> y; //The variables which we put the input in 
    cout << "Value of x: " << x << "and y: " <<y;
    return 0;
}

//Datatypes
#include<bits/stdc++.h> 
using namespace std; 

int main(){
     //int,long,long long,float,double
     int x=10; //int is the datatype
     long x=15;// higher range integers
     cin >> x;
     long long x=120000000;

     float x=5.6;
     float y=5;
     double y=5;
     cout << "Value of y: " << y;

     //string and getline
     string s1,s2; //let the input be hey string hey is s1 and string is s2
     cin >> s1 >> s2;
     cout << s1 << " " << s2;

     //Or we can write
     string str;
     getline(cin,str);// Here the whole line is put into the str can be included inside input
     cout << str;

     //char
     char ch='g';
     cin >> ch;
     cout << ch;
    return 0;
}