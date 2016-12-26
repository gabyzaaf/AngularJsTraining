using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Script.Serialization;
using System.Web.Services;


namespace WebApplication2
{
    /// <summary>
    /// Description résumée de webservice
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Pour autoriser l'appel de ce service Web depuis un script à l'aide d'ASP.NET AJAX, supprimez les marques de commentaire de la ligne suivante. 
    [System.Web.Script.Services.ScriptService]
    public class webservice : System.Web.Services.WebService
    {
        string[] arr =
        {
            "gabriel","david"
        };

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        public void getValue()
        {
            JavaScriptSerializer jss = new JavaScriptSerializer();
            User user = new WebApplication2.User("zaafrani", "gabriel", 26);
            Context.Response.Write(jss.Serialize(user));
        }
        /*
        [WebMethod]
        public Dictionary<string, string> changeValues(string nom,string prenom,int age)
        {
            Dictionary<string, string> keyAndValue = new Dictionary<string, string>();
            keyAndValue.Add("nom", nom);
            keyAndValue.Add("prenom", prenom);
            keyAndValue.Add("age", age.ToString());
            return keyAndValue;
         }
         */

        [WebMethod]
        public User changeValues(string nom, string prenom, int age)
        {
            JavaScriptSerializer jss = new JavaScriptSerializer();
            User user =  new User(nom,prenom,age);
            return (user);
        }
    }
}
