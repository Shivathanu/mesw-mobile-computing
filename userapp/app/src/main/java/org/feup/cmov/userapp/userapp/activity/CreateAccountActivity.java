package org.feup.cmov.userapp.userapp.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import org.feup.cmov.userapp.R;
import org.feup.cmov.userapp.userapp.model.User;
import org.feup.cmov.userapp.userapp.retrofit.RetrofitInit;

import java.util.UUID;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CreateAccountActivity extends AppCompatActivity {

    private User user;
    private Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_account);

        setButtonCreate();
    }

        @Override
    protected void onResume() {
        super.onResume();

        fillUser();

    }

    private void setButtonCreate() {
        button = (Button) findViewById(R.id.activity_create_account_button_create);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                    fillUser();
                    saveUser();
            }
        });
    }

    private void saveUser() {
        Call call = new RetrofitInit().getUserService().insert(user);

        call.enqueue(new Callback() {
            @Override
            public void onResponse(Call call, Response response) {
                Log.i("onResponse", "success!");
            }

            @Override
            public void onFailure(Call call, Throwable t) {
                Log.e("onFailure", "failure:"+t.getMessage());
            }
        });

        Toast.makeText(this, "User " + user.getFirstName()+" "+user.getLastName()+ " saved!", Toast.LENGTH_LONG).show();

    }


    private void fillUser() {
        EditText firstName = (EditText) findViewById(R.id.activity_create_account_firstname);
        EditText lastName = (EditText) findViewById(R.id.activity_create_account_firstname);
        EditText email = (EditText) findViewById(R.id.activity_create_account_email);
        EditText password = (EditText) findViewById(R.id.activity_create_account_password);
        EditText phone = (EditText) findViewById(R.id.activity_create_account_phone);

        user=new User();

        //Set ID as UUID
        user.setId(UUID.randomUUID().toString());
        user.setFirstName(firstName.getText().toString());
        user.setLastName(lastName.getText().toString());
        user.setEmail(email.getText().toString());
        user.setPassword(password.getText().toString());
        user.setPhone(phone.getText().toString());
    }
}
