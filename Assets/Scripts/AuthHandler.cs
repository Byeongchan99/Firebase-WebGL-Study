using UnityEngine;
using UnityEngine.UI;
using FirebaseWebGL.Scripts.FirebaseBridge;

namespace FirebaseWebGL.Examples.Auth
{
    public class AuthHandler : MonoBehaviour
    {
        public InputField emailInput;
        public InputField passwordInput;

        public Text statusText;

        private void Start()
        {
            if (Application.platform != RuntimePlatform.WebGLPlayer)
            {
                DisplayError("WebGL 플랫폼이 아니면 Javascript 기능은 인식되지 않습니다.");
                return;
            }
        }

        private void DisplayError(string errortext)
        {
            statusText.text = errortext;
        }

        private void DisplayInfo(string Infotext)
        {
            statusText.text = Infotext;
        }

        // 이메일 회원가입 실행
        public void CreateUserWithEmailAndPassword() =>
            FirebaseAuth.CreateUserWithEmailAndPassword(emailInput.text, passwordInput.text, gameObject.name, "DisplayInfo", "DisplayError");
    }
}
