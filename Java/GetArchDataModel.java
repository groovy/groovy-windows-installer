package de.xinaris;

/**
 * This class simply prints out the system property sun.arch.data.model,
 * allowing to distinguish between a 32-bit and a 64-bit installation
 * 
 * @author jbaumann
 *
 */
public class GetArchDataModel
{
    public static void main(String[] args)
    {
        String dataModel = System.getProperty("sun.arch.data.model");
        System.out.print("Found a " + dataModel + " bit java installation.");
        int bits = Integer.parseInt(dataModel);
        System.exit(bits);
    }
}
