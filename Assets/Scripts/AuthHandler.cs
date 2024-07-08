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
                DisplayError("WebGL �÷����� �ƴϸ� Javascript ����� �νĵ��� �ʽ��ϴ�.");
                return;
            }
        }

        private void DisplayError(string errorText)
        {
            statusText.text = errorText;
        }

        private void DisplayInfo(string infoText)
        {
            statusText.text = infoText;
        }

        public void CreateUserWithEmailAndPassword()
        {
            FirebaseAuth.CreateUserWithEmailAndPassword(emailInput.text, passwordInput.text, gameObject.name, nameof(DisplayInfo), nameof(DisplayError));
        }
    }
}
