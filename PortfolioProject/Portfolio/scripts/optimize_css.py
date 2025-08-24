#!/usr/bin/env python3
"""
CSS Optimization Script
This script helps optimize CSS files for the portfolio website.
"""

import os
import re
import glob
from pathlib import Path

def minify_css(css_content):
    """Minify CSS content by removing comments and unnecessary whitespace"""
    # Remove comments
    css_content = re.sub(r'/\*[\s\S]*?\*/', '', css_content)
    
    # Remove unnecessary whitespace
    css_content = re.sub(r'\s+', ' ', css_content)
    css_content = re.sub(r'{\s+', '{', css_content)
    css_content = re.sub(r'; ', ';', css_content)
    css_content = re.sub(r': ', ':', css_content)
    css_content = re.sub(r', ', ',', css_content)
    css_content = re.sub(r';\s*}', '}', css_content)
    css_content = re.sub(r'\s*}\s*', '}', css_content)
    css_content = re.sub(r'\s*{\s*', '{', css_content)
    
    return css_content.strip()

def optimize_css_file(input_path, output_path=None):
    """Optimize a single CSS file"""
    if output_path is None:
        output_path = input_path
    
    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Minify the content
        minified = minify_css(content)
        
        # Write the minified content
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(minified)
        
        original_size = len(content)
        minified_size = len(minified)
        reduction = ((original_size - minified_size) / original_size) * 100
        
        print(f"Optimized: {input_path}")
        print(f"  Original: {original_size} bytes")
        print(f"  Minified: {minified_size} bytes")
        print(f"  Reduction: {reduction:.1f}%")
        
        return True
        
    except Exception as e:
        print(f"Error optimizing {input_path}: {e}")
        return False

def find_css_files(directory):
    """Find all CSS files in the given directory"""
    css_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.css'):
                css_files.append(os.path.join(root, file))
    return css_files

def main():
    """Main function to optimize all CSS files"""
    static_dir = os.path.join('PortfolioProject', 'Portfolio', 'static')
    css_dir = os.path.join(static_dir, 'css')
    
    if not os.path.exists(css_dir):
        print(f"CSS directory not found: {css_dir}")
        return
    
    css_files = find_css_files(css_dir)
    
    if not css_files:
        print("No CSS files found to optimize.")
        return
    
    print(f"Found {len(css_files)} CSS files to optimize:")
    
    # Create backup directory
    backup_dir = os.path.join(css_dir, 'backup')
    os.makedirs(backup_dir, exist_ok=True)
    
    optimized_count = 0
    for css_file in css_files:
        # Create backup
        backup_file = os.path.join(backup_dir, os.path.basename(css_file))
        if os.path.exists(css_file):
            import shutil
            shutil.copy2(css_file, backup_file)
        
        # Optimize the file
        if optimize_css_file(css_file):
            optimized_count += 1
    
    print(f"\nOptimization complete: {optimized_count}/{len(css_files)} files optimized")
    print(f"Backups saved to: {backup_dir}")

if __name__ == "__main__":
    main()
