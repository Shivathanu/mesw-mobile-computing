package org.feup.cmov.userapp.userapp.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import org.feup.cmov.userapp.R;
import org.feup.cmov.userapp.userapp.model.User;

import java.util.UUID;

public class LoginActivity extends AppCompatActivity {

    private Button buttonLogin;
    private User user;
    private Button buttonCreateAccount;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        setButtonLogin();

        setButtonCreateAccount();

    }

   private void setButtonCreateAccount() {
        buttonCreateAccount = (Button) findViewById(R.id.activity_login_create_account_button);
        buttonCreateAccount.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent goToCreateAccount = new Intent(LoginActivity.this, CreateAccountActivity.class);
//                goToCreateAccount.putExtra("user", user); // Send data through activities.
                startActivity(goToCreateAccount);

            }
        });
    }

    private void setButtonLogin() {
        buttonLogin = (Button) findViewById(R.id.activity_login_button_login);
        buttonLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                fillUserLogin();

                Intent goToTimeTable = new Intent(LoginActivity.this, TimeTableActivity.class);
//                goToCreateAccount.putExtra("user", user); // Send data through activities.
                startActivity(goToTimeTable);

//                Toast.makeText(LoginActivity.this, "Welcome " + user.getEmail(), Toast.LENGTH_LONG).show();

            }
        });
    }

    private void fillUserLogin() {

        EditText email = (EditText) findViewById(R.id.activity_login_email);
        EditText password = (EditText) findViewById(R.id.activity_login_password);

        user=new User();

        user.setEmail(email.getText().toString());
        user.setPassword(password.getText().toString());

    }





}
