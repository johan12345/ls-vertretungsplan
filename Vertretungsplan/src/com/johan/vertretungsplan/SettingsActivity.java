package com.johan.vertretungsplan;

import android.annotation.SuppressLint;
import android.os.Bundle;

import org.holoeverywhere.preference.PreferenceActivity;

import com.actionbarsherlock.view.Menu;
import com.actionbarsherlock.view.MenuItem;
import com.google.analytics.tracking.android.EasyTracker;

import android.support.v4.app.NavUtils;

public class SettingsActivity extends PreferenceActivity {

	@SuppressLint("NewApi")
	@Override
    protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

        // Display the fragment as the main content.
        getSupportFragmentManager().beginTransaction()
                .replace(android.R.id.content, new SettingsFragment())
                .commit();
        
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
    }
	
	 @Override
	    public void onStart() {
	      super.onStart();	      
	      EasyTracker.getInstance().activityStart(this);
	    }
	    
	    @Override
	    public void onStop() {
	      super.onStop();
	      EasyTracker.getInstance().activityStop(this);
	    }

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getSupportMenuInflater().inflate(R.menu.activity_settings, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		switch (item.getItemId()) {
		case android.R.id.home:
			// This ID represents the Home or Up button. In the case of this
			// activity, the Up button is shown. Use NavUtils to allow users
			// to navigate up one level in the application structure. For
			// more details, see the Navigation pattern on Android Design:
			//
			// http://developer.android.com/design/patterns/navigation.html#up-vs-back
			//
			NavUtils.navigateUpFromSameTask(this);
			return true;
		}
		return super.onOptionsItemSelected(item);
	}

}
