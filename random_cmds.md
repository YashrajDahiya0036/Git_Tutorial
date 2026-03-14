## Supabase

- Run with `npx`
- `npx supabase start` - To start local supabase.
  - When starting local supabase you will ahve to use Docker.Docker will store the data in volumes.If you want to use the same volumes for a new project or you upadated the whole project and made a new folder, Keep the name of the new folder same as the docker will use the volume accoring to the name of the root folder.
- `npx supabase functions serve --env-file 'path to the file'` - To serve the functions locally
  - Or just put the env file in the fuctions folder.
- `npx supabase login`
- `npx supabase logout`
- `npx supabase link`
- `npx supabase unlink`
- `npx supabase status` - To get all the info about the linked project, such as keys and urls.
- `npx supabase projects list`
- `npx supabase migrations up` - To apply the migrations to the DB.
- `npx supabase db pull` - To pull the remote schema.
  - Add `--local` to pull the local DB.
  - It diffs against the migrations already present in the migrations folder.
- `npx supabase db dump > "filename.sql"`
  - dump acts as a snapshot of the current db. So use this when we need all the DB schema.
  - Add `--local` to dump the local DB.
  - Add `--data-only` to dump the data from DB.
  - Add `--db-url` to add a specific url for the db
- `npx supabase db reset` - To reset the DB. It will automatically apply the migrations in the migration folder.

## ADB

- `adb kill-server` - To stop the server.
- `adb devices` - To list the connected devices.
- `adb reverse tcp:PORT_ON_DEVICE tcp:PORT_ON_PC` - To reverse a port.
  - use `adb -s device_number reverse tcp:1 tcp:1` to reverse port on selected device.
  - use `adb forward` to forward the ports.
- To use wireless debugging use first use `adb pair ip_address:port`. Then `adb connect ip_address:port`
  - To reverse port here use `adb -s ip_addess:port`
  - The scripts are added to the scripts repo.
- `adb uninstall com.name.app` - To delete a app.
- `adb logcat` - To get the logs.
  - Add `adb -s device` to select a device.
  - Use `adb logcat -d > crash.txt` to get the file of errors.

## GREP

- `grep "pattern" file.txt` - To search for a specific string in a file.
- `grep -i "pattern" file.txt` - To search while ignoring case sensitivity.
- `grep -r "pattern" .` - To search recursively through all files in the current directory.
- `grep -v "pattern" file.txt` - To invert the match (show lines that **do not** contain the pattern).
- `grep -E "pattern1|pattern2" file.txt` - To search for multiple patterns at once using Extended Regex.
- `grep -n "pattern" file.txt` - To show the line numbers of the matches.
- `grep -A 5 "pattern" file.txt` - To show the match and 5 lines of context after it.
  - use `-B` for before and `-C` for both.

## Others

- `rm -rf file/folder` - To delete a file.
  - use `rm -rf */name` or `rm -rf apps/*/name` for recursive deletion.
