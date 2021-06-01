using Xamarin.Essentials;
using Android.App;
using Android.OS;
using Android.Runtime;
using Android.Widget;
using AndroidX.AppCompat.App;
using Xamarin.Forms;

namespace StopITandroid
{
    [Activity(Label = "@string/app_name", Theme = "@style/AppTheme", MainLauncher = true)]
    public class MainActivity : AppCompatActivity
    {
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            Platform.Init(this, savedInstanceState);

            bool login = Preferences.ContainsKey("UID"); // TO DO: set login as firebase login action result

            if (login)
            {
                SetContentView(Resource.Layout.home_form);
            }
            else
            {
                SetContentView(Resource.Layout.activity_main);
                FindViewById(Resource.Id.authButton).Click += (s, e) => SetContentView(Resource.Layout.auth_form);
            }
        }

        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, [GeneratedEnum] Android.Content.PM.Permission[] grantResults)
        {
            Platform.OnRequestPermissionsResult(requestCode, permissions, grantResults);
            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }
}
