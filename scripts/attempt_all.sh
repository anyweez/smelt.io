#npm install -g sor

echo "Running all tests via local sorjs.com instance."

# Run test solution file for each problem
for challenge in "solutions/"*.js
do
    echo "Testing $challenge"
    sor $challenge --remote http://localhost:3000
done
