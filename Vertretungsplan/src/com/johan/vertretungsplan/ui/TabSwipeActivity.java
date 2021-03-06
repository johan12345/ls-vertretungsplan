/*  Vertretungsplan - Android-App für Vertretungspläne von Schulen
    Copyright (C) 2014  Johan v. Forstner

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see [http://www.gnu.org/licenses/]. */

package com.johan.vertretungsplan.ui;

import java.util.ArrayList;
import java.util.List;

import org.holoeverywhere.app.Activity;
import org.holoeverywhere.app.Fragment;
import org.holoeverywhere.widget.ViewPager;

import android.content.res.Configuration;
import android.os.Bundle;
import android.os.Parcelable;


import android.support.v4.app.FragmentPagerAdapter;
import android.util.DisplayMetrics;

import com.johan.vertretungsplan.R;
  
public abstract class TabSwipeActivity extends Activity {
  
    protected ViewPager mViewPager;
    public TabsAdapter adapter;
  
    @Override
    protected void onCreate(Bundle savedInstanceState) {   	  
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
    	/*
         * Create the ViewPager and our custom adapter
         */
        mViewPager = (ViewPager) findViewById(R.id.pager);
        
        if (savedInstanceState == null) {
        	adapter = new TabsAdapter( this, mViewPager );
        } else {
        	Parcelable adapterState = savedInstanceState.getParcelable("TabsAdapter");
        	adapter = new TabsAdapter( this, mViewPager );
        	adapter.restoreState(adapterState, this.getClassLoader());
        }
        
        mViewPager.setAdapter( adapter );   
    }
    
    @Override
    protected void onSaveInstanceState(Bundle state) {
    	state.putParcelable("TabsAdapter", adapter.saveState());
    	super.onSaveInstanceState(state);
    }
  
    /**
     * Add a tab with a backing Fragment
     * @param titleRes A string resource pointing to the title for the tab
     * @param fragment the Fragment
     */
    protected void addTab(int titleRes, Fragment fragment ) {
        adapter.addTab( getString( titleRes ), fragment );
    }
    /**
     * Add a tab with a backing Fragment
     * @param titleRes A string to be used as the title for the tab
     * @param fragment the fragment
     */
    protected void addTab(CharSequence title, Fragment fragment ) {
        adapter.addTab( title, fragment);
    }
  
  public class TabsAdapter extends FragmentPagerAdapter implements ViewPager.OnPageChangeListener {
  
	  private List<Fragment> mFragments = new ArrayList<Fragment>();;
      private List<CharSequence> mTitles = new ArrayList<CharSequence>();
	  
        /**
         * @param fm
         * @param fragments
         */
        public TabsAdapter(Activity activity, ViewPager pager) {
            super(activity.getSupportFragmentManager());
        }

  
        public void addTab( CharSequence title, Fragment fragment ) {
  
            mFragments.add( fragment );
            mTitles.add( title );
            
            notifyDataSetChanged();
        }
        
        @Override
        public float getPageWidth(int position){
        	DisplayMetrics metrics = new DisplayMetrics();
        	getWindowManager().getDefaultDisplay().getMetrics(metrics);
            getResources().getConfiguration();
			if (metrics.widthPixels / (metrics.densityDpi / 160f) >= 800 && getResources().getConfiguration().orientation == Configuration.ORIENTATION_LANDSCAPE) {
                return 0.5f;
            } else {
                return super.getPageWidth(position);
            }
        }
  
        @Override
        public Fragment getItem(int position) {
            return mFragments.get(position);
        }
  
        @Override
        public int getCount() {
            return mFragments.size();
        }
        @Override
        public CharSequence getPageTitle(int position) {
        	return mTitles.get(position);
        }
        
  
        public void onPageScrollStateChanged(int arg0) {
        }
  
        public void onPageScrolled(int arg0, float arg1, int arg2) {
        }
  
        @Override
        public void onPageSelected(int position) {
        }

    }
}
