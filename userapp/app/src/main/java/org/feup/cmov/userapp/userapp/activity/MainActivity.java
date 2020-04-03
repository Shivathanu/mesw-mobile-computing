package org.feup.cmov.userapp.userapp.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import org.feup.cmov.userapp.R;
import org.feup.cmov.userapp.userapp.model.User;
import org.feup.cmov.userapp.userapp.retrofit.RetrofitInit;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {

    private ListView listUsers;
    private MainActivity context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Users List");
        setContentView(R.layout.activity_main);

    }

    @Override
    protected void onResume(){
        super.onResume();

        List<User> user=new ArrayList<User>();

//        user.add(new User(1,"Last01","First01","user@email.com","password01","11111111"));

        listUsers=findViewById(R.id.activity_main_list_users);

//        context=this;

//        listUsers.setAdapter(new ArrayAdapter<>(this,android.R.layout.simple_list_item_1,user));

        Call<List<User>> call = new RetrofitInit().getUserService().list();

        call.enqueue(new Callback<List<User>>() {
            @Override
            public void onResponse(Call<List<User>> call, Response<List<User>> response) {
                List<User> user = response.body();
                Log.i("onResponse", "sucesso!");
                for(User u:user){
                    Log.i("user", "user:"+u.getLastName());
                }

                listUsers.setAdapter(new ArrayAdapter<>(MainActivity.this,android.R.layout.simple_list_item_1,user));

//                user=new ArrayList<User>();
            }

            @Override
            public void onFailure(Call<List<User>> call, Throwable t) {
                Log.e("onFailure called", t.getMessage());
            }
        });




    }


}

