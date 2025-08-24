#!/usr/bin/env python3
"""
Comprehensive Optimization Script
This script optimizes both CSS and JavaScript files for the portfolio website.
"""

import os
import subprocess
import sys

def run_optimization(script_name):
    """Run a specific optimization script"""
    try:
        script_path = os.path.join('scripts', script_name)
        result = subprocess.run([sys.executable, script_path], 
                              cwd='PortfolioProject/Portfolio',
                              capture_output=True,
                              text=True)
        
        if result.returncode == 0:
            print(f"✓ {script_name} completed successfully")
            print(result.stdout)
        else:
            print(f"✗ {script_name} failed")
            print(result.stderr)
            
        return result.returncode == 0
        
    except Exception as e:
        print(f"Error running {script_name}: {e}")
        return False

def main():
    """Main function to run all optimization scripts"""
    print("Starting comprehensive optimization...")
    print("=" * 50)
    
    # Change to the Portfolio directory
    original_dir = os.getcwd()
    portfolio_dir = os.path.join(original_dir, 'PortfolioProject', 'Portfolio')
    
    if not os.path.exists(portfolio_dir):
        print(f"Portfolio directory not found: {portfolio_dir}")
        return
    
    os.chdir(portfolio_dir)
    
    # Run CSS optimization
    print("\n1. Optimizing CSS files...")
    css_success = run_optimization('optimize_css.py')
    
    # Run JavaScript optimization
    print("\n2. Optimizing JavaScript files...")
    js_success = run_optimization('optimize_js.py')
    
    # Return to original directory
    os.chdir(original_dir)
    
    # Summary
    print("\n" + "=" * 50)
    print("OPTIMIZATION SUMMARY")
    print("=" * 50)
    print(f"CSS Optimization: {'✓ SUCCESS' if css_success else '✗ FAILED'}")
    print(f"JavaScript Optimization: {'✓ SUCCESS' if js_success else '✗ FAILED'}")
    
    if css_success and js_success:
        print("\n🎉 All optimizations completed successfully!")
        print("\nNext steps:")
        print("1. Test the website functionality")
        print("2. Run Lighthouse audit to measure improvements")
        print("3. Verify accessibility features")
    else:
        print("\n⚠️ Some optimizations failed. Check the logs above.")

if __name__ == "__main__":
    main()
