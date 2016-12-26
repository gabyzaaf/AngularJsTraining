using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2
{
    public class User
    {
        public string nom { get;  set; }
        public string prenom { get;  set; }
        public int age { get;  set; }
        
        public User(string snom,string sprenom,int iage)
        {
            nom = snom;
            prenom = sprenom;
            age = iage;
        }


        public User()
        {

        }
    }
}