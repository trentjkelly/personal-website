#include <string>
#include <iostream>
using namespace std;

class Person {
    private:
        int socialSecurityNum;
        string celebrityCrush;
        string myFeelings;
    public:
        string myName;
        string school;
        int gradYear;
        string email;
        string gitHub;
        string resume;
        
        Person(){
            myName = "Trent Kelly";
            school = "University of Minnesota";
            gradYear = 2025;
            email = "trentjkelly@outlook.com";
            gitHub = "https://github.com/trentjkelly";
            resume = "Click Here!";
        }
        
        void Hobbies(){
            cout << "Marathon Running" << endl;
            cout << "Mediterranean Cooking" << endl;
            cout << "Playing Guitar" << endl;
            cout << "Mindfulness/Meditation" << endl;
            cout << "Weightlifting" << endl;
        }
};