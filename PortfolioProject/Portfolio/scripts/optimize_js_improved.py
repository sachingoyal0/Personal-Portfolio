#!/usr/bin/env python3
"""
Improved JavaScript Optimization Script
This script helps optimize JavaScript files for the portfolio website.
It handles commented-out files better by skipping them instead of minifying to empty.
"""

import os
import re
from pathlib import Path

def minify_js(js_content):
    """Minify JavaScript content by removing comments and unnecessary whitespace"""
    # Remove single-line comments
    js_content = re.sub(r'//.*', '', js_content)
    
    # Remove multi-line comments
    js_content = re.sub(r'/\*[\s\S]*?\*/', '', js_content)
    
    # Remove unnecessary whitespace
    js_content = re.sub(r'\s+', ' ', js_content)
    js_content = re.sub(r'\s*([=+\-*/%&|^~<>!?:,;{}()[\]])\s*', r'\1', js_content)
    js_content = re.sub(r';\s*', ';', js_content)
    js_content = re.sub(r',\s*', ',', js_content)
    js_content = re.sub(r'\s*}\s*', '}', js_content)
    js_content = re.sub(r'\s*{\s*', '{', js_content)
    
    return js_content.strip()

def is_only_comments(content):
    """Check if the content contains only comments"""
    # Remove all comments
    no_comments = re.sub(r'//.*|/\*[\s\S]*?\*/', '', content)
    # Check if what remains is only whitespace
    return not no_comments.strip()

def optimize_js_file(input_path, output_path=None):
    """Optimize a single JavaScript file"""
    if output_path is None:
        output_path = input_path
    
    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if the file contains only comments
        if is_only_comments(content):
            print(f"Skipping (comments only): {input_path}")
            return True, "skipped"
        
        # Minify the content
        minified = minify_js(content)
        
        # If minified content is empty but original wasn't, keep original
        if not minified.strip() and content.strip():
            print(f"Warning: Minification would remove all content from {input_path}")
            print("Keeping original file to preserve functionality")
            return True, "skipped"
        
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
        
        return True, "optimized"
        
    except Exception as e:
        print(f"Error optimizing {input_path}: {e}")
        return False, "error"

def find_js_files(directory):
    """Find all JavaScript files in the given directory"""
    js_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.js'):
                js_files.append(os.path.join(root, file))
    return js_files

def main():
    """Main function to optimize all JavaScript files"""
    static_dir = os.path.join('PortfolioProject', 'Portfolio', 'static')
    js_dir = os.path.join(static_dir, 'JavaScript')
    
    if not os.path.exists(js_dir):
        print(f"JavaScript directory not found: {js_dir}")
        return
    
    js_files = find_js_files(js_dir)
    
    if not js_files:
        print("No JavaScript files found to optimize.")
        return
    
    print(f"Found {len(js_files)} JavaScript files to optimize:")
    
    # Create backup directory
    backup_dir = os.path.join(js_dir, 'backup_improved')
    os.makedirs(backup_dir, exist_ok=True)
    
    optimized_count = 0
    skipped_count = 0
    error_count = 0
    
    for js_file in js_files:
        # Create backup
        backup_file = os.path.join(backup_dir, os.path.basename(js_file))
        if os.path.exists(js_file):
            import shutil
            shutil.copy2(js_file, backup_file)
        
        # Optimize the file
        success, status = optimize_js_file(js_file)
        
        if success:
            if status == "optimized":
                optimized_count += 1
            elif status == "skipped":
                skipped_count += 1
        else:
            error_count += 1
    
    print(f"\nOptimization complete:")
    print(f"  Optimized: {optimized_count} files")
    print(f"  Skipped: {skipped_count} files (comments only)")
    print(f"  Errors: {error_count} files")
    print(f"Backups saved to: {backup_dir}")

if __name__ == "__main__":
    main()
