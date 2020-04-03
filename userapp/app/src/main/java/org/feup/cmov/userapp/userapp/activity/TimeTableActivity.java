package org.feup.cmov.userapp.userapp.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;


import org.feup.cmov.userapp.R;
import org.feup.cmov.userapp.userapp.model.Route;
import org.feup.cmov.userapp.userapp.retrofit.RetrofitInit;


import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class TimeTableActivity extends AppCompatActivity {

    private ListView listTimeTable;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle(getTitle()+" - Timetables");
        setContentView(R.layout.activity_time_table);

    }

    @Override
    protected void onResume(){
        super.onResume();

        listTimeTable=(ListView) findViewById(R.id.activity_timetable_list_timetable);

        Call<List<Route>> call = new RetrofitInit().getRouteService().list();

        call.enqueue(new Callback<List<Route>>() {
            @Override
            public void onResponse(Call<List<Route>> call, Response<List<Route>> response) {
                List<Route> routes = response.body();
                Log.i("onResponse", "sucesso!");
                for(Route r:routes){
                    Log.i("route", "route:"+r.toString());
                }

                listTimeTable.setAdapter(new ArrayAdapter<>(TimeTableActivity.this, android.R.layout.simple_list_item_1, routes));
            }

            @Override
            public void onFailure(Call<List<Route>> call, Throwable t) {
                Log.e("onFailure called", t.getMessage());
            }
        });




    }
}
